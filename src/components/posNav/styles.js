import styled from 'styled-components';


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


