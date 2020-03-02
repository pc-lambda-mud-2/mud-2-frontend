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
            <li>Intro to Django github repo</li>
            <li>CS12: Intro to Django: Setup, Models, and Migrations</li>
            <li>CS12: Intro to Django: GraphQL and Graphene</li>
            <li>CS12: Intro to Django: REST and Users</li>
            <li>CS12: Intro to Django: Token Auth, GraphQL Mutations</li>
            <li>The official documentation</li>
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
