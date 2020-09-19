import React from 'react';

import InfoHeader from '../../components/infoHeader';
import ShoppingCart from '../../components/shoppingCart';
import PosNav from '../../components/posNav';
import NavigationBar from '../../components/navigationBar';

const Carrinho = () => {
  return(
    <>
      <InfoHeader />
      <NavigationBar />
      <PosNav />
      <ShoppingCart />   
    </>
  ) 
}

export default Carrinho;