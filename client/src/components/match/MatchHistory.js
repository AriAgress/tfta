import React from "react";

const MatchHistory = ({ data }) => {
  return (
    <div>
      <div>
        Date: {data.matchHistory[0].info.game_datetime}
        Game Length: {data.matchHistory[0].info.game_length / 60} min
      </div>
    </div>
  );
};

export default MatchHistory;
