import React from 'react';

import { Shopping, Cart, Resumo, Box, ButtonF } from './styles';


const shoppingCart = () => {
  return(
    <>
      <Shopping>
        <h1>Carrinho</h1>
        <div>
          <Cart></Cart>
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
      <Cart>
        {/* <Produto>
          <img></img>
          <Descrição>
            <Nome></Nome>
            <CodProd></CodProd>
            <TextIcon></TextIcon>
          </Descrição>
          <Contador></Contador>
          <Valor></Valor>
        </Produto> */}
      </Cart>
    </>
  ) 
}

export default shoppingCart;