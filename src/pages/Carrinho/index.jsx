import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'
import { MdPerson, MdLocationOn, MdShoppingCart, MdMenu, MdSearch } from 'react-icons/md'

import SuaMarca from '../../assets/SuaMarca.jpg';

import { Contato, Boxcontato, Boxmarca, Boxmenu, Header, ContatoGroup, MenuGroup, Busca, Section } from './styles';

const Carrinho = () => {
  return(
    <>
      <Header>
        <Boxcontato>
          <Contato> <FaWhatsapp size="20px" /> <p>(47) 9999-9999</p> </Contato>
          <ContatoGroup>
            <Contato> <MdPerson size="20px" /> <p>Aretusa</p> </Contato>
            <Contato> <MdLocationOn size="20px" /> <p>Bom Retiro - Joinville, SC</p> </Contato>
          </ContatoGroup>
        </Boxcontato>
        <Boxmarca>
          <img src={SuaMarca} alt=""/>
        </Boxmarca>
        <Boxmenu>
          <MenuGroup>
            <Contato> <MdMenu size="20px" /> <p>SETORES</p> </Contato>
            <Contato> <p>OFERTAS</p> </Contato>
          </MenuGroup>
          <Busca> 
            <input placeholder="O que voce procura?"/>
            <MdSearch></MdSearch>
          </Busca>
          <Contato> <MdShoppingCart size="24px" color="red" /> <p>R$ 49,49</p> </Contato>
        </Boxmenu>
      </Header>
      <Section></Section>
    </>
) 
}

export default Carrinho;