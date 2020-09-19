import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'
import { MdPerson, MdLocationOn } from 'react-icons/md'

import SuaMarca from '../../assets/SuaMarca.jpg';

import { TextIcon, Boxcontato, Boxmarca, Header, TextGroup } from './styles';

const infoHeader = () => {
  return(
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
      
    </Header>
  )
}

export default infoHeader;