export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    product
  };
}

export function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    id,
  };
}

export function updateAmount(id, quantidade) {
  return {
    type: 'UPDATE_AMOUNT',
    id,
    quantidade,
  };
}

export function addDescToProd(id, desc) {
  return {
    type: 'ADD_DESC_TO_PROD',
    id,
    desc: desc,
  };
}