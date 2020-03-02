import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #42240c;
  font-family: "Monofett";
`;

export const StyledBodyCont = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #42240c;
  color: #42e6a4;
  h1 {
    margin: 0;
    font-weight: normal;
    padding: 2%;
  }
  .div-cont {
    background-color: #42240c;
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .games-rules {
      background-color: #42e6a4;
      height: 70%;
      width: 50%;
      margin-top: 5%;
      color: #42240c;

    }
    .authentication {
      background-color: #42e6a4;
      height: 30%;
      width: 20%;
      margin-top: 5%;
      color: #42240c;
      display:flex;
      flex-direction:column;

    }
  }
`;
