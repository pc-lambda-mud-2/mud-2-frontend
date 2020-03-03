import React from "react";
import { StyledOnboarding } from "../styles";

const UserOnboarding = () => {
  return (
    <StyledOnboarding>
      <h1>mud game</h1>
      <div className="form-cont">
        <div className="signup"></div>
        <div className="login"></div>
      </div>
    </StyledOnboarding>
  );
};

export default UserOnboarding;
