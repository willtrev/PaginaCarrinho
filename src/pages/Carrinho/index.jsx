import React from 'react';

import InfoHeader from '../../components/InfoHeader';
import ShoppingCart from '../../components/ShoppingCart';
import PosNav from '../../components/PosNav';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import StickTop from '../../components/StickTop';

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
