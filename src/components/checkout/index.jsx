import React from 'react';

import { Asd, Busca, RuaNum, Bairro, Title, LabelInput } from './styles';
import ResumoPedido from '../resumoPedido';


const Checkout = () => {
  return(
    <Asd> 
      <div>
        <Title>Endereço</Title>
        <RuaNum>
          <LabelInput>
            <label>Rua</label>
            <input placeholder="" />
          </LabelInput>
          <LabelInput>
            <label >Numero</label>
            <input placeholder=""/>
          </LabelInput>
        </RuaNum>
        <LabelInput>
          <label>Bairro</label>
          <input placeholder="" />
        </LabelInput>
        <Title>Pague pelo site</Title>
        <LabelInput>
          <label>Numero do cartão</label>
          <input maxlength="16" />
        </LabelInput>
        <LabelInput>
          <label>CVC</label>
          <input placeholder="" />
        </LabelInput>
      </div>
      <ResumoPedido action="final" />
    </Asd>
  ) 
}

export default Checkout;