import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Shopping = styled.section`
  display: flex;
  margin: 0 50px;
  flex-direction: column;

  max-width: 968px;
  

  div {
    display: flex;
    max-width: 968px;
   
  }
`;

export const Title = styled.h1 `
  align-self: center;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -1.5px;

  margin: 30px 0 30px 0;
  height: 40px;
  font-size: 32px;
`;


export const Box = styled.div`
  display: flex;
  height: 50px;
  width: 300px;
  border-bottom: 1px solid grey;
  padding: 10px 0;
`; 

export const Resumo = styled.section`
  height: fit-content;
  width: 300px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  /* align-self: flex-end; */
  border: 1px solid grey;
  
  div {
    max-width: 299px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    display: flex;
    align-self: center;
    align-items: center;
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

export const ButtonF = styled(Link)`
  height: 50px;
  width: 258px;
  margin: 20px;
  
  
  button {
    height: 50px;
    width: 258px;
    flex: 1;
    color: white;
    background-color: #e53935;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.1px;
    border: none;

    &:hover  {
      opacity: 0.8;
    }
  }
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 70px;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    height: 115px;
    padding: 10px 10px 15px 10px;
    border-bottom: 1px solid lightgrey;
    /* background-color: #ee1; */

    img {
      height: 90px;
      width: 90px;
      margin-right: 40px;
    }
  }
`;

export const Descricao = styled.div`
  height: 90px;
  width: 220px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  button {
    border: none;
    background-color: white;
  }
  

  h1 {
    height: 40px;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;

  }

  p {
    height: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: grey;
  }

`;

export const TextIcon = styled.article`
  display: flex;
  align-items: center;
  height: 20px;

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: red;

  p {
    display: flex;
    align-items: center;
    margin-left: 5px;
    color: red;
  }
`;


export const Contador = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 4px;
  height: 27px;
  width: 100px;

  button {
    height: 20px;
    width: 20px;
    background-color: white;
    border: none;
    margin: 2px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const ValorTotal = styled.div`
  height: 90px;
  width: 90px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;
  }

  button {
    border: none;
    background-color: white;
  }
`;


