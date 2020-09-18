import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'
import { MdPerson, MdLocationOn, MdShoppingCart, MdMenu, MdSearch } from 'react-icons/md'

import SuaMarca from '../../assets/SuaMarca.jpg';

import { TextIcon, Boxcontato, Boxmarca, NavBar, Header, TextGroup, MenuGroup, Busca, Section, Total, Centraliza } from './styles';

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
      <Section></Section>
    </>
) 
}

export default Carrinho;