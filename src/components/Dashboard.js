import React from "react";
import { StyledDashboard } from "../styles";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <h1>mud game</h1>
      <div className="rooms-maps-cont">
        <div className="map-cont">
          <div className="map"></div>
          <div className="directions"></div>
        </div>
        <div className="rooms-cont">
          <div className="players"></div>
          <div className="room-says"></div>
        </div>
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
