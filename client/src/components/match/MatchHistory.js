import React from "react";

const MatchHistory = ({ data }) => {
  return (
    <div>
      <div>
        {data.matchHistory?.map((placement, i) => (
          <div key={i}>
            Date: {placement.info.game_datetime}
            Game Length: {placement.info.game_length / 60} min
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchHistory;
