import React from "react";
import { unix_timestamp } from "../../utils/utils";

const MatchHistory = ({ data }) => {
  let party = [];
  data.matchHistory.forEach((element) => {
    const participants = element.info.participants;
    participants.forEach((element2) => {
      const player = element2.puuid;
      if (player === data.puuid) {
        party.push(element2);
      } else {
        return;
      }
    });
  });

  console.log(party);

  return (
    <div>
      <div>
        {data.matchHistory?.map((placement, i) => (
          <div key={i}>
            Date: {unix_timestamp(placement.info.game_datetime)}
            Game Length: {Math.round(placement.info.game_length / 60, 2)} min
          </div>
        ))}
        {party.map((obj, i) => (
          <div key={i}>{obj.placement}</div>
        ))}
      </div>
    </div>
  );
};

export default MatchHistory;
