import styled from 'styled-components';


/* Estilização da primeira section */

export const Asd = styled.div`
  margin: 40px 70px;
  display: flex;
  flex-direction: row;

  div {
    max-width: 370px;
  }
  form {
    display: flex;
    align-items: center;
  }

  input {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40px;
    width: 370px;
    padding: 0px;
    color: #616161;
    border: 1px solid #BDBDBD;
    border-radius: 5px;
    padding: 8px;
    margin-top: 5px;

    font-family:'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  letter-spacing: -0.5px;
  font-size: 20px;
  font-weight: 500;
  
  color: #424242;
  padding: 15px 0;
`

export const LabelInput = styled.div`
  padding: 7px 0;
  label {
    font-family:'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #616161;
  }
`;



export const RuaNum = styled.form`
  flex-direction: row;
  
  input {
    width: 270px;
  }

  div + div {
    margin-left: 10px;

    input {
      width: 90px
    }
  }
`;

