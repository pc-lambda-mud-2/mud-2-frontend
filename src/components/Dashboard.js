import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyledDashboard, Player } from "../styles";
import * as actionCreators from "../state/actions";
import north from "../imgs/north.svg";
import south from "../imgs/south.svg";
import west from "../imgs/west.svg";
import east from "../imgs/east.svg";

const Dashboard = props => {
  console.log("dashboard ==>", props);
  const {
    initializePlayerReducer,
    initializePlayer,
    moveNorth,
    getRooms,
    roomsReducer,
    moveReducer
  } = props;
  useEffect(() => {
    getRooms();
  }, [getRooms]);

  useEffect(() => {
    initializePlayer();
  }, [initializePlayerReducer]);

  let loadingroom = [];
  const initialUser = initializePlayerReducer.initialize;
  const move = moveReducer.initialize || { description: "", error_msg: "" };
  let roomsData = roomsReducer?.rooms.rooms || loadingroom;
  let parsedRooms = roomsData;
  let directions = [];
  let editedRooms;
  parsedRooms.sort((a, b) =>
    a.id > b.id ? 1 : a.id === b.id ? (a.size > b.size ? 1 : -1) : -1
  );
  console.log(parsedRooms);
  directions = parsedRooms.map((room, index) => {
    editedRooms = {
      roomId: room.id,
      n_to: room.n_to,
      s_to: room.s_to,
      e_to: room.e_to,
      w_to: room.w_to,
      x: index,
      y: 0
    };
    return editedRooms;
  });

  directions = directions.map(rooms => {
    if (rooms.n_to === 0) {
      rooms.n_to = " 0.1em solid #42e6a4";
    } else {
      rooms.n_to = " 0";
    }

    if (rooms.s_to === 0) {
      rooms.s_to = `0.1em solid #42e6a4`;
    } else {
      rooms.s_to = `0`;
    }

    if (rooms.e_to === 0) {
      rooms.e_to = `0.1em solid #42e6a4`;
    } else {
      rooms.e_to = `0`;
    }

    if (rooms.w_to === 0) {
      rooms.w_to = `0.1em solid #42e6a4`;
    } else {
      rooms.w_to = `0`;
    }

    return rooms;
  });
  console.log("*******!", initialUser, "!!!!!!move", move);

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
          <div className="map">
            <>
            <Player/>
            {directions.map(room => {
              return (
                <div
                  key={room.roomId}
                  style={{
                    borderBottom: room.s_to,
                    borderTop: room.n_to,
                    borderLeft: room.w_to,
                    borderRight: room.e_to,
                    textAlign: "center",
                    fontFamily: "roboto"
                  }}
                >
                  {room.roomId}
                </div>
              );
            })}
            </>
          </div>
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
            <h4 style={{color:"white"}}>{move.error_msg}</h4>
          </div>
        </div>
      </div>
    </StyledDashboard>
  );
};

export default connect(state => state, actionCreators)(Dashboard);
