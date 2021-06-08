import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

import api from '../../services/api';

import { CheckOutBox, RuaNum, Title, LabelInput, ButtonF, WarningMessage } from './styles';
import OrderSummary from '../orderSummary';




const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const carrinho = useSelector(state => state.cart);
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

  async function handleCheckout(data){
    if(carrinho.length === 0){
      return (alert('O carrinho está vazio'))
    }
    const formatedData = {
      itens: prod,
      endereco: {
        rua: data.rua,
        bairro: data.bairro,
        numero: data.numero
      },
      cartao: {
        numero: data.cartao,
        cvc: data.cvc
      }
    }

    try {
      const response = await api.post('/carrinho', formatedData);
      console.log(response);
      alert('Pagamento efetuado com sucesso')
    } catch (err){
      alert('Erro ao efetuar pagamento')
    }
  }

  return(
    <CheckOutBox onSubmit={handleSubmit(handleCheckout)}>
      <div>
        <Title>Endereço</Title>
        <RuaNum>
          <LabelInput>
            <label>Rua</label>
            <input
            {...register("rua", {required: 'O campo rua é obrigatório'})}
          />
          {errors.rua && <WarningMessage>{errors.rua.message}</WarningMessage> }
          </LabelInput>
          <LabelInput>
            <label >Numero</label>
            <input
            {...register("numero", {required: 'O campo numero é obrigatório'} )}
          />
          {errors.numero && <WarningMessage>{errors.numero.message}</WarningMessage> }
          </LabelInput>
        </RuaNum>
        <LabelInput>
          <label>Bairro</label>
          <input
            {...register("bairro", {required: 'O campo bairro é obrigatório'})}
          />
          {errors.bairro && <WarningMessage>{errors.bairro.message}</WarningMessage> }
        </LabelInput>
        <Title>Pague pelo site</Title>
        <LabelInput>
          <label>Numero do cartão</label>
          <input
            {...register("cartao", {required: 'O campo cartão é obrigatório', pattern: {
              value:/^[0-9]{16}/,
              message: 'O campo deve conter 16 digitos'
            }, maxLength: {value: 16, message: 'O campo deve conter 16 digitos'} })}
          />
          {errors.cartao && <WarningMessage>{errors.cartao.message}</WarningMessage> }
        </LabelInput>
        <LabelInput>
          <label>CVC</label>
          <input
            {...register("cvc", {required: 'O campo cvc é obrigatório',
            minLength: {value: 3, message: 'O campo CVC deve ter 3 digitos'},
            maxLength: {value: 3, message: 'O campo CVC deve ter 3 digitos'}
          })}
          />
          {errors.cvc && <WarningMessage>{errors.cvc.message}</WarningMessage> }
        </LabelInput>
      </div>
      <OrderSummary >
        <ButtonF><button style={{ cursor: 'pointer' }} type="submit">Finalizar a compra</button></ButtonF>
      </OrderSummary>
    </CheckOutBox>
  )
}

export default Checkout;
