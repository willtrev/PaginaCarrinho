import styled from 'styled-components';

export const CheckOutBox = styled.form`
  margin: 40px 70px;
  display: flex;
  flex-direction: row;

  div {
    max-width: 370px;
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

    &:focus {
      border:1px solid #424242;
    }
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
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 7px 0;
  label {
    font-family:'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #616161;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }
`;



export const RuaNum = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

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

export const ButtonF = styled.div`
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

export const WarningMessage = styled.p`
  color: red;
  font-size: 12px;
`;

