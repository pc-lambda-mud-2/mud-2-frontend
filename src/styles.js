import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #42240c;
  font-family: "Monofett";
  color: #42e6a4;
`;

export const StyledBodyCont = styled.div`
  width: 95%;
  height: 95%;
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
      border-radius:2%;
      h2 { 
        font-weight: normal;
        padding-left:3%;
      }
      p {
        padding:3%;
        padding-top:0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      li {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }

    }
    .authentication {
      background-color: #42e6a4;
      height: 30%;
      width: 20%;
      margin-top: 5%;
      color: #42240c;
      display:flex;
      flex-direction:column;
      border-radius:2%;


    }
  }
`;
