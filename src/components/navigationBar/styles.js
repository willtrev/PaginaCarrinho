import styled from 'styled-components';

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

export const NavBar = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
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
    color: #616161;
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