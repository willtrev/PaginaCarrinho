import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'
import { MdPerson, MdLocationOn, MdShoppingCart, MdMenu, MdSearch, MdLocalShipping, MdCreditCard, MdLocalOffer } from 'react-icons/md'

import SuaMarca from '../../assets/SuaMarca.jpg';

import { TextIcon, Boxcontato, Boxmarca, NavBar, Header, TextGroup, MenuGroup, Busca, Section, Total, Shopping, Cart, Resumo, Box, ButtonF } from './styles';

const Carrinho = () => {
  return(
    <>
      <Header>
        <Boxcontato>
          <TextIcon> <FaWhatsapp size="20px" /> <p>(47) 9999-9999</p> </TextIcon>
          <TextGroup>
            <TextIcon> <MdPerson size="20px" /> <p>Aretusa</p> </TextIcon>
            <TextIcon> <MdLocationOn size="20px" /> <p>Bom Retiro - Joinville, SC</p> </TextIcon>
          </TextGroup>
        </Boxcontato>
        <Boxmarca>
          <img src={SuaMarca} alt=""/>
        </Boxmarca>
        <NavBar>
          <MenuGroup>
            <TextIcon> <MdMenu size="20px" /> <p>SETORES</p> </TextIcon>
            <TextIcon> <p>OFERTAS</p> </TextIcon>
          </MenuGroup>
          <Busca> 
            <input placeholder="O que voce procura?"/>
            <MdSearch></MdSearch>
          </Busca>
          <Total> <MdShoppingCart size="24px" color="red" /> <p>R$ 49,49</p> </Total>
        </NavBar>
      </Header>
      <Section>
        <TextIcon><MdLocalShipping size="20px" color="grey" /><p>Delivery apenas para Joinville</p></TextIcon>
        <TextIcon><MdLocalOffer size="20px" color="grey" /><p>Descontos de 10% nas compras acima de R$ 200,00</p></TextIcon>
        <TextIcon><MdCreditCard size="20px" color="grey" /><p>Pague em até 12x no cartão</p></TextIcon>
      </Section>
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
    </>
) 
}

export default Carrinho;