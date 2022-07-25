import React from "react";
import "./profileCard.css";

const ProfileCard = ({ data }) => {
  return (
    <div className="card-wrapper">
      <div className="profile-container">
        <div className="profile-img">
          <img src="" alt="" />
        </div>
        <div className="user">
          <div>{data.user.name}</div>
          <div>Summoner Level: {data.user.summonerLevel}</div>
        </div>
      </div>
      <div>
        Ranked Rank: {data.userStats[0].tier}
        {data.userStats[0].rank}
        wins: {data.userStats[0].wins}
      </div>
    </div>
  );
};

export default ProfileCard;
