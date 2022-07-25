import React, { useEffect, useState } from "react";
import { unix_timestamp } from "../../utils/utils";

const MatchHistory = ({ data }) => {
  const [matchData, setMatchData] = useState([]);
  const [placements, setPlacements] = useState([]);
  const [averagePlace, setAveragePlace] = useState(0);

  const init = (data) => {
    let matchDataArr = [];
    let placementsArr = [];
    data.matchHistory.forEach((element) => {
      const participants = element.info.participants;
      participants.forEach((element2) => {
        const participants2 = element2.puuid;
        if (participants2 === data.puuid) {
          matchDataArr.push(element2);
          placementsArr.push(element2.placement);
        } else {
          return;
        }
      });
    });
    setMatchData(matchDataArr);
    setPlacements(placementsArr);
    const average = (placementsArr) =>
      placementsArr.reduce((a, b) => a + b) / placementsArr.length;
    setAveragePlace(average(placementsArr));
  };
  console.log("Banh mi", matchData);

  useEffect(() => {
    init(data);
  }, [data]);

  return (
    <div>
      <div>
        {data.matchHistory?.map((placement, i) => (
          <div key={i}>
            Date: {unix_timestamp(placement.info.game_datetime)}
            Game Length: {Math.round(placement.info.game_length / 60, 2)} min
          </div>
        ))}
        <div>
          {matchData.map((obj, i) => (
            <div key={i}>{obj.placement}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchHistory;
