import React from "react";
import { unix_timestamp } from "../../utils/utils";
import "./matchHistory.css";

const MatchHistory = ({ data, matchData, gameLength }) => {
  return (
    <div className="hist-wrapper">
      {data.matchHistory.map((placement, i) => (
        <div className="hist-body" key={i}>
          Placement:
          <br />
          {matchData[i]?.placement}
          <br />
          {matchData[i]?.companion.species}
          <br />
          Time {unix_timestamp(placement.info.game_datetime)}
          <br />
          Game Length: {Math.round(gameLength[i] / 60, 2)} min Game
          <br />
          Length: {Math.round(placement.info.game_length / 60, 2)} min
        </div>
      ))}
    </div>
  );
};

export default MatchHistory;
