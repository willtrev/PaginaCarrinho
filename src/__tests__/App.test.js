import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

test('render without crashing', () => {
  const renders = render(<App />)
  expect(renders).toBeTruthy();

})