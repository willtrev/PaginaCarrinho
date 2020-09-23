import React from 'react';

import InfoHeader from '../../components/infoHeader';
import Checkout from '../../components/checkout';
import PosNav from '../../components/posNav';
import NavigationBar from '../../components/navigationBar';

import { StickTop } from './styles' ;

const Carrinho = () => {
  return(
    <>
      <StickTop>
        <InfoHeader />
        <NavigationBar />
      </StickTop>
      <PosNav />
      <Checkout />
    </>
  ) 
}

export default Carrinho;