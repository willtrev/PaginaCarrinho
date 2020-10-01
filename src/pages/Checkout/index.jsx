import React from 'react';

import InfoHeader from '../../components/InfoHeader';
import Checkout from '../../components/Checkout';
import PosNav from '../../components/PosNav';
import NavigationBar from '../../components/NavigationBar';
import StickTop from '../../components/StickTop';

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
