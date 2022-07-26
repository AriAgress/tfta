import React from "react";
import "./profileCard.css";

const ProfileCard = ({ data, averagePlace }) => {
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
      <div className="profile-body">
        <div className="user-stats" id="">
          Rank:
          <br />
          {data.userStats[0].tier} {data.userStats[0].rank}
        </div>
        <div className="user-placement" id="">
          Average placement in last 6 games
          <br />
          {averagePlace}
          <br />
          Wins: {data.userStats[0].wins}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
