import { formatPrice } from '../util/format';
import { useState, useEffect } from 'react';
import api from '../services/api';

const loadingProducts = async setProducts => {
  const response = await api.get('/carrinho');
  const data = response.data.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.valor_unitario),
  }))
  // data.map(p => {
  //   setProducts(p);
  // })
  setProducts(data);
};

export default function useApi() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadingProducts(setProducts);
  }, []);

  return products;
}