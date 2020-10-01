import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useApi from '../../hooks/useApi';


import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';
const apiMock = new MockAdapter(api);

describe('useApi Hook', () => {
  apiMock.onGet('/carrinho').reply(200, [
    {
      id: 1,
      nome: "ARROZ PACOTE",
      valor_unitario: 8.49,
      quantidade: 2,
      url_imagem: "https://simplest-meuspedidos-arquivos.s3.amazonaws.com/media/imagens_auto/alimentos/arroz_pacote.jpg",
      sku: "123213213"
    }
  ])
  it('test state and nextUpdated state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useApi());

    expect(result.current).toEqual([]);

    await waitForNextUpdate();

    expect(result.current[0].nome).toEqual("ARROZ PACOTE");
  });
});