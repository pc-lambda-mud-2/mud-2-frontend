import React from "react";
import { StyledAboutBodyCont } from "../styles";
import github_logo from "../imgs/github_logo.png";

const teamData = [
  {
    profile: "https://avatars1.githubusercontent.com/u/32112393?s=400&v=4",
    name: "Pascal Ulor",
    role: "Team Lead",
    github: "https://github.com/PascalUlor"
  },
  {
    profile: "https://avatars0.githubusercontent.com/u/53653844?s=460&v=4",
    name: "Mildred Awuor",
    role: "Frontend developer",
    github: "https://github.com/awuorm"
  },
  {
    profile: "https://avatars1.githubusercontent.com/u/7245156?s=400&v=4",
    name: "Pere Sola",
    role: "Backend developer",
    github: "https://github.com/petrussola"
  },
  {
    profile: "https://avatars2.githubusercontent.com/u/3417852?s=400&v=4",
    name: "Martin Twum Mensah",
    role: "Backend developer",
    github: "https://github.com/twumm"
  }
];

const About = () => {
  return (
    <StyledAboutBodyCont>
      <h1>mud game</h1>
      <h2>Mud game team members</h2>
      <div className="Team">
        {teamData.map((team, index) => {
          return (
            <div className="team-member" key={index}>
              <img alt="profile" src={team.profile} />
              <h4>Name: {team.name}</h4>
              <h4>Role: {team.role}</h4>
              <a href={team.github}>
                <img
                  className="github-logo"
                  src={github_logo}
                  alt="github logo"
                />
              </a>
            </div>
          );
        })}
      </div>
    </StyledAboutBodyCont>
  );
};

export default About;
