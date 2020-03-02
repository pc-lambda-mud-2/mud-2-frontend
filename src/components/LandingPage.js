import React from "react";
import { StyledBodyCont } from "../styles";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <StyledBodyCont>
      <h1>mud game</h1>
      <div className="div-cont">
        <div className="games-rules">
          <h2>Description</h2>
          <p></p>
          <h2>Rules of the game</h2>
          <p></p>
        </div>
        <div className="authentication">
          <NavLink to="/about">Meet the team</NavLink>
          <NavLink to="/auth">Login</NavLink>
          <NavLink to="/auth">Signup</NavLink>
        </div>
      </div>
    </StyledBodyCont>
  );
};

export default LandingPage;
