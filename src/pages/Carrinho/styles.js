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

export const TextIcon = styled.div`
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
    font-weight: medium;
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
`;