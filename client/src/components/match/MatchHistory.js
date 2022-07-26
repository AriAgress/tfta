import React from "react";
import { unix_timestamp } from "../../utils/utils";
import "./matchHistory.css";

const MatchHistory = ({ data, matchData }) => {
  return (
    <div className="hist-wrapper">
      {data.matchHistory.map((placement, i) => (
        <div className="hist-body" key={i}>
          Date: {unix_timestamp(placement.info.game_datetime)}
          <br />
          Game Length: {Math.round(placement.info.game_length / 60, 2)} min
          <br />
          {matchData[i]?.placement}
        </div>
      ))}
    </div>
  );
};

export default MatchHistory;
