import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

import useApi from '../../hooks/useApi';

import OrderSummary from '../orderSummary';
import { Shopping, ProductList, Descricao, Title, TextIcon, Contador, ValorTotal, ButtonF } from './styles';
import { BiComment } from 'react-icons/bi';
import { MdRemove, MdAdd } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';

function ShoppingCart() {

  const info = useSelector(state => state.cart);
  const api = useApi();

  const dispatch = useDispatch();

  function increment(product){
    dispatch(CartActions.updateAmount(product.id, product.quantidade + 1))
  };

  function decrement(product){
    dispatch(CartActions.updateAmount(product.id, product.quantidade - 1))
  };


  useEffect(() => {
    if(info.length === 0){
      api.map(produto => (
        dispatch(CartActions.addToCart(produto))
      ))
    }
  // eslint-disable-next-line
  }, [api]);


  function handleDescricao(id , desc, e) {
    if (e.key === 'Enter' || e.keyCode === 13) {

      dispatch(CartActions.addDescToProd(id, desc));
    }
  }

  return(
    <>
      <Shopping>
        <Title>Carrinho</Title>
        <div>
          <ProductList data-testid="lista-itens">
            {info ? info.map(product => (
              <li key={product.id}>
                <img
                  src={product.url_imagem}
                  alt={product.nome}
                />
                <Descricao>
                  <h1>{product.nome}</h1>
                  <p>SKU {product.sku}</p>
                  <button>
                    <TextIcon>
                      <BiComment size="20px" />
                      {/* <span >Deixei um comentário neste produto</span> */}
                      <input
                        // className="nowYouSeeMe"
                        onKeyDown={e => handleDescricao(product.id, e.target.value, e)}
                        placeholder={product.observacao ? "Deixei um comentário neste produto" : "Adicionar observação"}
                      >
                      </input>
                    </TextIcon>
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
            )): "Carregando..."}
          </ProductList>
          <OrderSummary>
            <ButtonF to="checkout"><button style={{ cursor: 'pointer' }}>Finalizar a compra</button></ButtonF>
          </OrderSummary>
        </div>
      </Shopping>
    </>
  )
}

export default ShoppingCart;

