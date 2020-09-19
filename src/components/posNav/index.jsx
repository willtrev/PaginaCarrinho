import React from 'react';
import { MdLocalShipping, MdCreditCard, MdLocalOffer } from 'react-icons/md'

import { TextIcon, Section } from './styles';


const posNav = () => {
  return(
      <Section>
        <TextIcon><MdLocalShipping size="20px" color="grey" /><p>Delivery apenas para Joinville</p></TextIcon>
        <TextIcon><MdLocalOffer size="20px" color="grey" /><p>Descontos de 10% nas compras acima de R$ 200,00</p></TextIcon>
        <TextIcon><MdCreditCard size="20px" color="grey" /><p>Pague em até 12x no cartão</p></TextIcon>
      </Section> 
  ) 
}

export default posNav;