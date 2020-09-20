import React, { Component } from 'react';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import { Shopping, ProductList, Resumo, Box, ButtonF, Descricao, Title, TextIcon, Contador, ValorTotal } from './styles';
import { BiComment } from 'react-icons/bi';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';

export default class shoppingCart extends Component {
  state = {
    products: [],
  };

  async componentDidMount(){
    const response = await api.get('/carrinho');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.valor_unitario),
    }));

    this.setState({ products: data });

  }



  render () {
    const { products } = this.state;

    return(
      <>
        <Shopping>
          <Title>Carrinho</Title>
          <div>
            <ProductList>
              { products.map(product => (
                <li key={product.id}>
                  <img
                    src={product.url_imagem}
                    alt={product.nome}
                  />
                  <Descricao>
                    <h1>{product.nome}</h1>
                    <p>SKU {product.sku}</p>
                    <TextIcon> <BiComment size="20px" /> <p>Adicionar observação</p> </TextIcon>
                  </Descricao>
                  <Contador>
                    <button><AiOutlineMinus size="20px" color="grey"/></button>
                    <p>{product.quantidade}</p>
                    <button><AiOutlinePlus size="20px"color="red"/></button>
                  </Contador>
                  <ValorTotal>
                    <p>{product.priceFormatted}</p>
                    <IoMdTrash size="20px" color="red" />
                  </ValorTotal>
                </li>
              )) }
              
            </ProductList>
            <Resumo>
              <Box><h1>RESUMO DO PEDIDO</h1></Box>
              <article>
                <div>
                <p>Itens</p>
                <p>5</p>
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
}
