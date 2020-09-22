import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import { Shopping, ProductList, Resumo, Box, ButtonF, Descricao, Title, TextIcon, Contador, ValorTotal } from './styles';
import { BiComment } from 'react-icons/bi';
import { MdRemove, MdAdd } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';

function ShoppingCart() {
  const info = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // const [products, setProducts] = useState([]);
   

  useEffect(() => {
    api.get('/carrinho').then(response=> {
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.valor_unitario),
      }));
      // setProducts(data);
      data.map(produto => (
        dispatch({
          type: 'ADD_TO_CART',
          product: produto,
      })))
    });
  // eslint-disable-next-line
  }, []);

  const handleAddProduct = product => dispatch({
    type: 'ADD_TO_CART',
    product,
  })

  // const asdf = product = (
  //   product.quantidade.reduce();
  // )

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
                  <button><MdRemove size="20px" color="grey" /></button>
                  <p>{product.quantidade}</p>
                  <button><MdAdd size="20px"color="red" onClick={() => handleAddProduct(product)}/></button>
                </Contador>
                <ValorTotal>
                  <p>{product.priceFormatted}</p>
                  <button type="button" onClick={()=>
                    dispatch({type: 'REMOVE_FROM_CART', id: product.id})
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
              <p>{ info.length }</p>
              </div>
              <div>
                <p>Total em produtos</p> 
                <p>R$ 62,62</p>
              </div>
              <div>
                <p>Descontos</p>
                <p>R$ 0,00</p>
              </div>
            </article>
            <div>
              <h2>Total</h2> <h2>R$ 62,62</h2>
            </div>
            <ButtonF><button>Finalizar a compra</button></ButtonF>
          </Resumo>
        </div>
      </Shopping>
    </>
  ) 
}

export default ShoppingCart;
// export default connect(state => ({
//   cartSize: state.cart.lenght,
// }))(ShoppingCart);
