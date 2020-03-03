import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyledDashboard } from "../styles";
import * as actionCreators from "../state/actions";
import north from "../imgs/north.svg";
import south from "../imgs/south.svg";
import west from "../imgs/west.svg";
import east from "../imgs/east.svg";

const Dashboard = props => {
    const {initializePlayerReducer,initializePlayer,moveNorth} = props;
    useEffect(() => {
      initializePlayer();
    }, [initializePlayer,initializePlayerReducer.initialize]);
    const initialUser = initializePlayerReducer.initialize;
  console.log("props from dashboard ===>", initialUser.players);

  const handleMoveNorth = e => {
    e.preventDefault();
    moveNorth({ direction: "n" });
  };
  const handleMoveSouth = e => {
    e.preventDefault();
    moveNorth({ direction: "s" });
  };
  const handleMoveEast = e => {
    e.preventDefault();
    moveNorth({ direction: "e" });
  };
  const handleMoveWest = e => {
    e.preventDefault();
    moveNorth({ direction: "w" });
  };
  return (
    <StyledDashboard>
      <h1>mud game</h1>
      <div className="rooms-maps-cont">
        <div className="map-cont">
          <div className="map"></div>
          <div className="directions">
            <h1>
              move <br /> directions
            </h1>
            <div>
              <button onClick={handleMoveNorth}>n</button>
              <img src={north} alt="arrows" />
            </div>
            <div>
              <button onClick={handleMoveSouth}>s</button>
              <img src={south} alt="arrows" />
            </div>
            <div>
              <button onClick={handleMoveWest}>w</button>
              <img src={west} alt="arrows" />
            </div>
            <div>
              <button onClick={handleMoveEast}>e</button>
              <img src={east} alt="arrows" />
            </div>
          </div>
        </div>
        <div className="rooms-cont">
          <div className="players">
            <h4>Room name: {initialUser.title} </h4>
            <h4>Players in Room:</h4>
            <button>
              Chat{" "}
              <span aria-label="hand-wave" role="img">
                👋
              </span>{" "}
            </button>
            <ol>
              {initialUser.players === undefined ? (
                <h4> No players in this room</h4>
              ) : (
                initialUser.players.map((player, index) => {
                  return (
                    <h1 key={index}>
                      {index + 1}. {player}
                    </h1>
                  );
                })
              )}
            </ol>
          </div>
          <div className="room-says">
            <h4>Room says:</h4>
            <h4>{initialUser.description}</h4>
          </div>
        </div>
      </div>
    </StyledDashboard>
  );
};

export default connect(state => state, actionCreators)(Dashboard);
