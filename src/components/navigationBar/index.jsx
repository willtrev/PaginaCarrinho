import React from 'react';
import { MdShoppingCart, MdMenu, MdSearch } from 'react-icons/md'

import { TextIcon, NavBar, MenuGroup, Busca, Total } from './styles';

const navigationBar = () => {
  return(
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
  )
}

export default navigationBar;