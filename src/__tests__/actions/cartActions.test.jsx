import * as actions from '../../store/modules/cart/actions'

describe('actions', () => {
  it('should create an action to add a product', () => {
    const product = [{
      id: 1,
      nome: "ARROZ PACOTE",
      valor_unitario: 8.49,
      quantidade: 2,
      url_imagem: "https://simplest-meuspedidos-arquivos.s3.amazonaws.com/media/imagens_auto/alimentos/arroz_pacote.jpg",
      sku: "123213213"
    }]
    const expectedAction = {
      type: 'ADD_TO_CART',
      product
    }
    expect(actions.addToCart(product)).toEqual(expectedAction)
  })

  it('should create an action to remove a product', () => {
    const product = {
      id: 1,
    }
    const expectedAction = {
      type: 'REMOVE_FROM_CART',
      id: 1,
    }
    expect(actions.removeFromCart(product.id)).toEqual(expectedAction)
  })

  it('should create an action to update the amount of a product', () => {
    const product = {
      id: 1,
      quantidade: 3
    }
    const expectedAction = {
      type: 'UPDATE_AMOUNT',
      id: product.id,
      quantidade: product.quantidade,
    }
    expect(actions.updateAmount(product.id, product.quantidade)).toEqual(expectedAction)
  })

  it('should create an action to add a description to a product', () => {
    const desc = "Retirar Gordura";
    const product = {
      id: 1,
      desc: desc
    }
    const expectedAction = {
      type: 'ADD_DESC_TO_PROD',
      id: product.id,
      desc,
    }
    expect(actions.addDescToProd(product.id, product.desc)).toEqual(expectedAction)
  })
  
})