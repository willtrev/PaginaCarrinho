import styled from 'styled-components';

//  Estilização do Header da pagina.

export const Header = styled.header`
  display: flex;
  flex-direction: column
`;

export const Boxcontato = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

export const Contato = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;

  padding: 20px 0 15px 0;

  font-size: 12px;
  font-family:'Roboto', sans-serif;

  p {
    margin-left: 5px;
  }
`;

export const ContatoGroup = styled.div`
  display: flex;
  flex-direction: row;

  & > ${Contato} {
    padding-left: 20px;
  }
`;


export const Boxmarca = styled.div`
  height: 35px;
  align-self: center;
  margin: 10px 0;

`;

export const Boxmenu = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  
  p {
    font-family:'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bold;
  }

`;

export const MenuGroup = styled.div`
  display: flex;
  flex-direction: row;

  & > ${Contato} {
    padding-right: 20px;
  }
`;

export const Busca = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid black;
  

  input {
    justify-items: flex-start;
    height: 20px;
    width: 300px;
    padding: 0px;
    color: #f5f5f5;
    border: 0;

    font-family:'Roboto', sans-serif;
    font-size: 14px;
    font-weight: medium;
  }

`;

/* Estilização da primeira section */

export const Section = styled.section`
  height: 60px;
  background-color: #F5F5F5;
`;