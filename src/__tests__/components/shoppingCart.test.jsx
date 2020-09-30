import React from 'react';
import ShoppingCart from '../../components/shoppingCart';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

jest.mock('react-redux');

describe('ShoppingCart', () => {
  it('renders the component without crashing', () => {
    shallow(<ShoppingCart />)
  });
  
  it('renders loading text on product list', () => {
    const wrapper = shallow(<ShoppingCart />)
    const loading = "Carregando...";
    expect(wrapper.contains(loading)).toEqual(true);
  })
});
