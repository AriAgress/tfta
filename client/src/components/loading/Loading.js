import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div id="position">
      <svg width="200" height="200" viewBox="0 0 40 60">
        <polygon
          class="triangle"
          fill="none"
          stroke="#000"
          stroke-width="1"
          points="16,1 32,32 1,32"
        />
        <text class="loading" x="0" y="45" fill="#000">
          Loading...
        </text>
      </svg>
    </div>
  );
};

export default Loading;
