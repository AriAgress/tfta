import React from "react";
import "./profileCard.css";
import { SiRiotgames } from "react-icons/si";

const ProfileCard = ({ data, averagePlace, averageEliminated }) => {
  const magentaStyles = {
    color: "magenta",
  };

  const goldStyles = {
    color: "gold",
  };

  const silverStyles = {
    color: "silver",
  };

  const bronzeStyles = {
    color: "bronze",
  };

  const greenStyles = {
    color: "green",
  };

  const redStyles = {
    color: "red",
  };

  return (
    <div className="card-wrapper">
      <div className="profile-container">
        <div className="profile-img">
          <SiRiotgames />
        </div>
        <div className="user">
          <div style={{ fontWeight: "bold" }}>{data.user.name}</div>
          <div>Summoner Level: {data.user.summonerLevel}</div>
        </div>
      </div>
      <div className="profile-body">
        <div className="user-stats">
          Rank:
          <div
            class="tier"
            style={
              data.userStats[0]?.tier === "GOLD"
                ? goldStyles
                : data.userStats[0]?.tier === "SILVER"
                ? silverStyles
                : data.userStats[0]?.tier === "BRONZE"
                ? bronzeStyles
                : magentaStyles
            }>
            {data.userStats[0]?.tier}
          </div>
          <div>{data.userStats[0]?.rank}</div>
        </div>
        <div className="user-stats">
          Average Placement:
          <div
            class="tier"
            style={
              averagePlace === 1
                ? goldStyles
                : averagePlace <= 4
                ? greenStyles
                : redStyles
            }>
            {averagePlace}
          </div>
          <div>Wins: {data.userStats[0]?.wins}</div>
        </div>
        <div className="user-stats">
          Average Game Time:
          <div class="tier">{Math.round(averageEliminated / 60, 2)} min</div>
          <div>Losses: {data.userStats[0]?.losses}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
