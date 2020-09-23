import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';


import {  Resumo, Box } from './styles';


function ResumoPedido(props) {
  const [descQntMin, setDescQntMin] = useState([]);
  const [descValorMin, setDescValorMin] = useState([]);

  const info = useSelector(state => state.cart);

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
    <Resumo>
      <Box><h1>RESUMO DO PEDIDO</h1></Box>
      <article>
        <div>
        <p>Itens</p>
        <p>{ amount }</p>
        </div>
        <div>
          <p>Total em produtos</p> 
          <p>{ formatPrice(total) }</p>
        </div>
        <div>
          <p>Descontos</p>
          <p>{ formatPrice(desconto()) }</p>
        </div>
      </article>
      <div>
        <h2>Total</h2> <h2>{ formatPrice(total - desconto()) }</h2>
      </div>
      {/* <ButtonF to="checkout"><button style={{ cursor: 'pointer' }}>Finalizar a compra</button></ButtonF> */}
      {props.children}

    </Resumo>

  ) 
}

export default ResumoPedido;

