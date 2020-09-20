import React from 'react';

import { Shopping, ProductList, Resumo, Box, ButtonF, Descricao, Title, TextIcon, Contador, ValorTotal } from './styles';
import { BiComment } from 'react-icons/bi';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';


const shoppingCart = () => {
  return(
    <>
      <Shopping>
        <Title>Carrinho</Title>
        <div>
          <ProductList>
            <li>
              <img src="https://simplest-meuspedidos-arquivos.s3.amazonaws.com/media/imagens_auto/alimentos/arroz_pacote.jpg" alt="a"></img>
              <Descricao>
                <h1>REFRIGERANTE 2 LITROS</h1>
                <p>SKU 123213217</p>
                <TextIcon> <BiComment size="20px" /> <p>Adicionar observação</p> </TextIcon>
              </Descricao>
              <Contador>
                <button><AiOutlineMinus size="20px" color="grey"/></button>
                <p>2</p>
                <button><AiOutlinePlus size="20px"color="red"/></button>
              </Contador>
              <ValorTotal>
                <p>R$ 12,50</p>
                <IoMdTrash size="20px" color="red" />
              </ValorTotal>
            </li>
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

export default shoppingCart;