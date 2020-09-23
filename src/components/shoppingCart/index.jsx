import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import ResumoPedido from '../resumoPedido';
import { Shopping, ProductList, Descricao, Title, TextIcon, Contador, ValorTotal } from './styles';
import { BiComment } from 'react-icons/bi';
import { MdRemove, MdAdd } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';

function ShoppingCart() {

  const info = useSelector(state => state.cart);
  const dispatch = useDispatch();

  function increment(product){
    dispatch(CartActions.updateAmount(product.id, product.quantidade + 1))
  };

  function decrement(product){
    dispatch(CartActions.updateAmount(product.id, product.quantidade - 1))
  };

  
  useEffect(() => {
    if(info.length === 0){
      api.get('/carrinho').then(response => {
        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.valor_unitario),
        }));
        data.map(produto => (
          dispatch(CartActions.addToCart(produto))
        ))
      });
    }
    
  // eslint-disable-next-line
  }, []);

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
          <ResumoPedido action="checkout"/>
        </div>
      </Shopping>
    </>
  ) 
}

export default ShoppingCart;

