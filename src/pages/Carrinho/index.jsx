import React from 'react';

import InfoHeader from '../../components/infoHeader';
import ShoppingCart from '../../components/shoppingCart';
import PosNav from '../../components/posNav';
import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';

import { StickTop } from './styles' ;

const Carrinho = () => {
  return(
    <>
      <StickTop>
        <InfoHeader />
        <NavigationBar />
      </StickTop>
      <PosNav />
      <ShoppingCart /> 
      <Footer />  
    </>
  ) 
}

export default Carrinho;