import styled from 'styled-components';

//  Estilização do Header da pagina.

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: #fff
`;

export const Boxcontato = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0 15px 0;
`;

export const TextIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;

  /* padding: 20px 0 15px 0; */

  font-size: 12px;
  font-family:'Roboto', sans-serif;

  p {
    margin-left: 5px;
  }
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: row;

  & > ${TextIcon} {
    padding-left: 20px;
  }
`;


export const Boxmarca = styled.div`
  height: 35px;
  align-self: center;
  margin: 10px 0;

`;

/* Estilazação da NavBar */

export const NavBar = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  justify-self: center;
  margin: 10px 0;
  
  p {
    font-family:'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bold;
  }

`;

export const MenuGroup = styled.div`
  width: 210px;
  margin-right: auto;
  display: flex;
  flex-direction: row;

  & > ${TextIcon} {
    padding-right: 20px;
  }
`;



export const Busca = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid black;

  input {
    height: 20px;
    width: 300px;
    padding: 0px;
    color: #f5f5f5;
    border: 0;

    font-family:'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

`;

export const Total = styled.div`
  width: 210px;
  margin-left: auto;

  display: flex;

  align-items: center;
  justify-content: flex-end;
  height: 55px;

  padding: 20px 0 15px 0;

  font-size: 12px;
  font-family:'Roboto', sans-serif;

  p {
    margin-left: 5px;
  }
`;

/* Estilização da primeira section */

export const Section = styled.section`
  height: 60px;
  background-color: #F5F5F5;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    height: 20px;
    margin: 20px 0 20px 5px;
    font-family:'Roboto', sans-serif;
    font-weight: 500;
    font-size: 12px;
  }
`;

/* Estilização do carrinho e resumo da compra */

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