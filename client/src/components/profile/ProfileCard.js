import React from "react";
import "./profileCard.css";

const ProfileCard = ({ data }) => {
  return (
    <div className="card-wrapper">
      <div>
        {data.user.name}
        {data.user.summonerLevel}
        Ranked Rank: {data.userStats[0].tier}
        {data.userStats[0].rank}
        wins: {data.userStats[0].wins}
      </div>
    </div>
  );
};

export default ProfileCard;
