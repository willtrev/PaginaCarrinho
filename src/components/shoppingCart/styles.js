import styled from 'styled-components';

export const Shopping = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 968px;
  h1 {
    align-self: center;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -1.5px;

    margin: 30px 0 30px 0;
    height: 40px;
    font-size: 32px;
  }

  div {
    display: flex;
    max-width: 968px;
    
  }
`;

export const Cart = styled.section`
  
`;

export const Box = styled.div`
  display: flex;
  height: 50px;
  width: 300px;
  border-bottom: 1px solid grey;
`; 

export const Resumo = styled.section`
  width: 300px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  border: 1px solid grey;
  
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    align-self: center;
    height: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.1px;
    margin: 0 0 0 20px;
  }
  h2 {
    height: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 16px;
    margin: 0 20px;
  }
  p {
    height: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    
  }

  article {
    height: 130px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const ButtonF = styled.div`
  height: 90px;
  padding: 20px;
  
  button {
    flex: 1;
    color: white;
    background-color: #e53935;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.1px;
    border: none;
  }
`;