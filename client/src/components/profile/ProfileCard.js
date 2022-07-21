import React from "react";
import "./profileCard.css";

const ProfileCard = ({ data }) => {
  return (
    <div className="card-wrapper">
      <div>{data.user.name}</div>
    </div>
  );
};

export default ProfileCard;
