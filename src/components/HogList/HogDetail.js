import React from "react";

const HogDetail = ({ specialty, greased, weight }) => {
  return (
    <div>
      {" "}
      <p>Specialty: {specialty}</p>
      <p>Greased: {greased ? " Yes" : "Not Greased"}</p>
      <p>Wight: {weight}</p>
    </div>
  );
};

export default HogDetail;
