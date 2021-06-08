import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '../../services/api';

import { CheckOutBox, RuaNum, Title, LabelInput, ButtonF } from './styles';
import OrderSummary from '../orderSummary';



const Checkout = () => {

  const carrinho = useSelector(state => state.cart);

  const [ rua, setRua ] = useState('');
  const [ numero, setNumero ] = useState('');
  const [ bairro, setBairro ] = useState('');
  const [ cartao, setCartao ] = useState('');
  const [ cvc, setCvc ] = useState('');
  const [ prod, setProd ] = useState(['']);

  useEffect(() => {
    setProd(carrinho.map(a => {
      const s = {
        id: a.id,
        quantidade: a.quantidade,
        observacao: a.observacao
      }
      return s
    }))
  }, [carrinho])

  async function handleCheckout(e){
    e.preventDefault();

    if(carrinho.length === 0){
      return (alert('O carrinho está vazio'))
    }
    const data = {
      itens:
        prod
      ,
      endereco: {
        rua,
        bairro,
        numero
      },
      cartao: {
        numero: cartao,
        cvc
      }
    }

    try {
      const response = await api.post('/carrinho', data);
      console.log(response);
      alert('Pagamento efetuado com sucesso')
    } catch (err){
      alert('Erro ao efetuar pagamento')
    }
  }

  return(
    <CheckOutBox onSubmit={handleCheckout}>
      <div>
        <Title>Endereço</Title>
        <RuaNum>
          <LabelInput>
            <label>Rua</label>
            <input
              value={rua}
              onChange={e => setRua(e.target.value)}
              required
            />
          </LabelInput>
          <LabelInput>
            <label >Numero</label>
            <input
              type="number"
              min="0"
              max="999999"
              value={numero}
              onChange={e => setNumero(e.target.value)}
              required
            />
          </LabelInput>
        </RuaNum>
        <LabelInput>
          <label>Bairro</label>
          <input
            value={bairro}
            onChange={e => setBairro(e.target.value)}
            required
          />
        </LabelInput>
        <Title>Pague pelo site</Title>
        <LabelInput>
          <label>Numero do cartão</label>
          <input
            type="number"
            min="0"
            max="9999999999999999"
            value={cartao}
            onChange={e => setCartao(e.target.value)}
            required
          />
        </LabelInput>
        <LabelInput>
          <label>CVC</label>
          <input
            type="number"
            min="0"
            max="9999"
            value={cvc}
            onChange={e => setCvc(e.target.value)}
            required
          />
        </LabelInput>
      </div>
      <OrderSummary >
        <ButtonF><button style={{ cursor: 'pointer' }} type="submit">Finalizar a compra</button></ButtonF>
      </OrderSummary>
    </CheckOutBox>
  )
}

export default Checkout;
