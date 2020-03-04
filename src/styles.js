import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #42240c;
  font-family: "Monofett";
  color: #42e6a4;
  overflow-y: auto;
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
      border-radius: 2%;
      h2 {
        font-weight: normal;
        padding-left: 3%;
      }
      p {
        padding: 3%;
        padding-top: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      li {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
    }
    .authentication {
      background-color: #42e6a4;
      height: 30%;
      width: 20%;
      margin-top: 5%;
      color: #42240c;
      display: flex;
      flex-direction: column;
      border-radius: 2%;
    }
  }
`;

export const StyledAboutBodyCont = styled.div`
  width: 95%;
  height: 95%;
  background-color: #42240c;
  color: #42e6a4;
  h1 {
    margin: 0;
    font-weight: normal;
    padding: 2%;
    margin-bottom: 5%;
  }
  h2 {
    margin: 0;
    font-weight: normal;
    padding: 2%;
    font-size: 1.5em;
  }
  .Team {
    width: 95%;
    height: 95%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 0;
    .team-member {
      width: 38%;
      height: 45%;
      display: flex;
      flex-direction: column;
      background-color: #42e6a4;
      color: #42240c;
      align-items: center;
      margin-left: 4%;
      img {
        padding-top: 5%;
        width: 60%;
        height: 60%;
        border-radius: 50%;
      }
      h4 {
        font-weight: normal;
        font-size: 1.2em;
        margin: 0;
        padding: 0;
      }
      a {
        margin-left: 35%;
        .github-logo {
          width: 48%;
          height: 45%;
        }
      }
    }
  }
`;

export const StyledOnboarding = styled.div`
  width: 95%;
  height: 95%;
  background-color: #42240c;
  color: #42e6a4;
  h1 {
    margin: 0;
    font-weight: normal;
    padding: 2%;
    margin-bottom: 5%;
  }
  .form-cont {
    border-bottom: 0.2em solid #42e6a4;
    border-top: 0.2em solid #42e6a4;
    width: 70%;
    height: 70%;
    margin-left: 15%;
    display: flex;
    .signup {
      width: 50%;
      height: 100%;
      border-left: 0.2em solid #42e6a4;
      h1 {
        margin: 0;
        font-weight: normal;
        padding: 2%;
        margin-bottom: 5%;
        margin-left: 30%;
      }
      form {
        width: 90%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        input {
          width: 50%;
          background-color: #42240c;
          padding: 0.5em;
          border: 0.2em solid #42e6a4;
          font-family: "Monofett";
          color: #42e6a4;
          font-size: 1.5em;
          text-align: center;
        }
        button {
          width: 58%;
          background-color: #42e6a4;
          padding: 0.3em;
          border: 0.2em solid #42e6a4;
          font-family: "Monofett";
          color: #42240c;
          font-size: 1.5em;
        }
      }
    }
    .login {
      width: 50%;
      height: 100%;
      border-left: 0.2em solid #42e6a4;
      border-right: 0.2em solid #42e6a4;
      h1 {
        margin: 0;
        font-weight: normal;
        padding: 2%;
        margin-bottom: 5%;
        margin-left: 30%;
      }
      form {
        width: 90%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        input {
          width: 50%;
          background-color: #42240c;
          padding: 0.5em;
          border: 0.2em solid #42e6a4;
          font-family: "Monofett";
          color: #42e6a4;
          font-size: 1.5em;
          text-align: center;
        }
        button {
          width: 58%;
          background-color: #42e6a4;
          padding: 0.3em;
          border: 0.2em solid #42e6a4;
          font-family: "Monofett";
          color: #42240c;
          font-size: 1.5em;
        }
      }
    }
  }
`;

export const StyledDashboard = styled.div`
  width: 95%;
  height: 95%;
  background-color: #42240c;
  color: #42e6a4;
  h1 {
    margin: 0;
    font-weight: normal;
    padding: 2%;
  }
  .rooms-maps-cont {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .map-cont {
      width: 60%;
      height: 90%;
      background-color: #42240c;
      color: #42e6a4;
      margin-left: 2%;
      .map {
        width: 100%;
        height: 75%;
        border: 0.2em solid #42e6a4;
        margin-bottom: 5%;
      }
      .directions {
        width: 100%;
        height: 20%;
        border: 0.2em solid #42e6a4;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
          margin: 0;
          font-weight: normal;
          padding: 2%;
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 80%;
          width: 20%;
          button {
            margin-top: 5%;
            width: 50%;
            height: 40%;
            background-color: #42e6a4;
            font-family: "Monofett";
            border: none;
            border-radius: 80%;
            font-size: 1.8em;
            color: #42240c;
          }
          img {
            width: 100%;
            height: 45%;
          }
        }
      }
    }
    .rooms-cont {
      width: 35%;
      height: 90%;
      background-color: #42240c;
      color: #42e6a4;
      margin-left: 2%;
      .players {
        width: 100%;
        height: 40%;
        border: 0.2em solid #42e6a4;
        margin-bottom: 5%;
        overflow-y: auto;
        h4 {
          font-weight: normal;
          font-size: 1.3em;
          text-align: center;
          margin: 0;
          margin-top: 0.5em;
        }
        button {
          margin-left: 80%;
        }
        ol {
          h1 {
            font-size: 1.3em;
            font-family: "roboto";
            font-weight: normal;
          }
        }
      }
      .room-says {
        width: 100%;
        height: 40%;
        border: 0.2em solid #42e6a4;
        overflow-y: auto;
        h4 {
          font-weight: normal;
          font-size: 1.5em;
          text-align: center;
          margin: 0;
          margin-top: 0.5em;
        }
      }
    }
  }
`;
