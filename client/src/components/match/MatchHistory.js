import React from "react";
import { unix_timestamp } from "../../utils/utils";

const MatchHistory = ({ data }) => {
  console.log(data.puuid);

  return (
    <div>
      <div>
        {data.matchHistory?.map((placement, i) => (
          <div key={i}>
            Date: {unix_timestamp(placement.info.game_datetime)}
            Game Length: {Math.round(placement.info.game_length / 60, 2)} min
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchHistory;
