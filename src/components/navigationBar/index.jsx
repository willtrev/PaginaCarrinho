import React, { useState, useEffect   } from 'react';
import { MdShoppingCart, MdMenu, MdSearch } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import { TextIcon, NavBar, MenuGroup, Busca, Total } from './styles';
import { useSelector } from 'react-redux'

const NavigationBar = () => {
  const info = useSelector(state => state.cart);
  const [descQntMin, setDescQntMin] = useState([]);
  const [descValorMin, setDescValorMin] = useState([]);

  useEffect(() => {
    api.get('/politicas-comerciais').then(resp => {
      resp.data.map(desc => {
        if (desc.tipo === 'valor_minimo'){
          setDescValorMin(desc);
        } else if (desc.tipo === 'quantidade_itens_minima') {
          setDescQntMin(desc);
        }
      });
    })
  }, [])

  const amount = info.reduce((amount, product) => {
    return (amount += product.quantidade);
  }, 0);

  const total = (info.reduce((total, product) => {
    return total + product.valor_unitario * product.quantidade;
  }, 0));

  function desconto(){
    if (amount >= descQntMin.valor){
      return (total * descQntMin.desconto_percentual / 100) 
    } else if (total >= descValorMin.valor ){
      return (total * descValorMin.desconto_percentual / 100) 
    } else if (amount >= descQntMin.valor && total >= descValorMin.valor){
      return (total * (Math.max(descValorMin.desconto_percentual, descQntMin.desconto_percentual)) / 100) 
    }else {
      return 0;
    }
  }

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
      <Total to="/"> <MdShoppingCart size="24px" color="red" /> <p>{formatPrice(total - desconto())}</p> </Total>
    </NavBar>
  )
}

export default NavigationBar;