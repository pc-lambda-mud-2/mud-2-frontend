import React from "react";
import { StyledBodyCont } from "../styles";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <StyledBodyCont>
      <h1>mud game</h1>
      <div className="div-cont">
        <div className="games-rules">
          <h2>
            <span aria-label="scroll" role="img">
              📜
            </span>{" "}
            Description
          </h2>
          <p>
            A MUD…is a multiplayer real-time virtual world, usually text-based.
            MUDs combine elements of role-playing games, hack and slash, player
            versus player, interactive fiction, and online chat.{" "}
          </p>
          <h2>
            {" "}
            <span aria-label="clipboard" role="img">
              📋
            </span>
            Rules of the game
          </h2>
          <ul>
            <li>You can move through the connected rooms,using the game controls</li>
            <li>You can see the current players in the room</li>
            <li>The room will tell you where to go and what items it holds</li>
            <li>You can see players leaving and entering the room</li>
            <li>You can talk to other players in the room</li>
          </ul>
        </div>
        <div className="authentication">
          <NavLink
            style={{
              textDecoration: "none",
              color: "#42240c",
              fontSize: "1.5em",
              paddingLeft: "7%",
              paddingTop: "5%"
            }}
            to="/about"
          >
            <span aria-label="man-surfing" role="img">
              🏄‍♂️
            </span>
            Meet the team
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "#42240c",
              fontSize: "1.5em",
              paddingLeft: "7%",
              paddingTop: "5%"
            }}
            to="/auth"
          >
            <span aria-label="lock with key" role="img">
              🔐
            </span>
            Login
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              color: "#42240c",
              fontSize: "1.5em",
              paddingLeft: "7%",
              paddingTop: "5%"
            }}
            to="/auth"
          >
            <span aria-label="key" role="img">
              🔑
            </span>
            Signup
          </NavLink>
        </div>
      </div>
    </StyledBodyCont>
  );
};

export default LandingPage;
