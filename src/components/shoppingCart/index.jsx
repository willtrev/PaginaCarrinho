import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { Shopping, ProductList, Resumo, Box, ButtonF, Descricao, Title, TextIcon, Contador, ValorTotal } from './styles';
import { BiComment } from 'react-icons/bi';
import { MdRemove, MdAdd } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';

function ShoppingCart() {
  const [descQntMin, setDescQntMin] = useState([]);
  const [descValorMin, setDescValorMin] = useState([]);


  const info = useSelector(state => state.cart);
  const dispatch = useDispatch();

  function increment(product){
    dispatch(CartActions.updateAmount(product.id, product.quantidade + 1))
  };

  function decrement(product){
    dispatch(CartActions.updateAmount(product.id, product.quantidade - 1))
  };
  

  useEffect(() => {
    api.get('/politicas-comerciais').then(resp => {
      const data = resp.data.map(desc => {
        if (desc.tipo === 'valor_minimo'){
          setDescValorMin(desc);
        } else if (desc.tipo === 'quantidade_itens_minima') {
          setDescQntMin(desc);
        }
      });
    })
  }, [])

  useEffect(() => {
    api.get('/carrinho').then(response => {
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.valor_unitario),
      }));
      data.map(produto => (
        dispatch(CartActions.addToCart(produto))
      ))
    });
  // eslint-disable-next-line
  }, []);

  const amount = info.reduce((amount, product) => {
    return (amount += product.quantidade);
  }, 0);

  const total = (info.reduce((total, product) => {
    return total + product.valor_unitario * product.quantidade;
  }, 0));

  function desconto(){
    if (amount >= descQntMin.valor){
      return (total * descQntMin.desconto_percentual / 100) 
    } else if (total >= descValorMin.valor ){
      return (total * descValorMin.desconto_percentual / 100) 
    } else if (amount >= descQntMin.valor && total >= descValorMin.valor){
      return (total * (Math.max(descValorMin.desconto_percentual, descQntMin.desconto_percentual)) / 100) 
    }else {
      return 0;
    }
  }

  return(
    <>
      <Shopping>
        <Title>Carrinho</Title>
        <div>
          <ProductList>
            { info.map(product => (
              <li key={product.id}>
                <img
                  src={product.url_imagem}
                  alt={product.nome}
                />
                <Descricao>
                  <h1>{product.nome}</h1>
                  <p>SKU {product.sku}</p>
                  <button>
                   <TextIcon> <BiComment size="20px" /> <p>Adicionar observação</p> </TextIcon>
                  </button>
                </Descricao>
                <Contador>
                  <button><MdRemove size="20px" color="grey" onClick={() => decrement(product)}/></button>
                  <p>{product.quantidade}</p>
                  <button><MdAdd size="20px"color="red" onClick={() => increment(product)}/></button>
                </Contador>
                <ValorTotal>
                  <p>{product.priceFormatted}</p>
                  <button type="button" onClick={()=>
                    dispatch(CartActions.removeFromCart(product.id))
                  }>
                    <IoMdTrash size="20px" color="red" />
                  </button>
                </ValorTotal>
              </li>
            )) }
            
          </ProductList>
          <Resumo>
            <Box><h1>RESUMO DO PEDIDO</h1></Box>
            <article>
              <div>
              <p>Itens</p>
              <p>{ amount }</p>
              </div>
              <div>
                <p>Total em produtos</p> 
                <p>{ formatPrice(total) }</p>
              </div>
              <div>
                <p>Descontos</p>
                <p>{ formatPrice(desconto()) }</p>
              </div>
            </article>
            <div>
              <h2>Total</h2> <h2>{ formatPrice(total - desconto()) }</h2>
            </div>
            <ButtonF><button>Finalizar a compra</button></ButtonF>
          </Resumo>
        </div>
      </Shopping>
    </>
  ) 
}

export default ShoppingCart;

