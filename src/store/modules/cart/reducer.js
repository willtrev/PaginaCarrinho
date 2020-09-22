import produce from 'immer';

export default function cart(state=[], action) {
  console.log(action.product)


  switch (action.type) {
    case 'ADD_TO_CART':
      return [ ...state, action.product ];
    case 'REMOVE_FROM_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id)

        if (productIndex >= 0){
          draft.splice(productIndex, 1)
        }
      });
    default:
      return state;
  }
}