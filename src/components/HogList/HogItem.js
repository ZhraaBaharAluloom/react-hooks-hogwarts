import React, { useState } from "react";
import HogDetail from "./HogDetail";

// Styles
const styles = {
  itemWrap: {
    padding: 20,
  },
  more: {
    cursor: "pointer",
    color: "#FF70A5",
  },
};

const HogItem = ({ image, name, specialty, greased, weight }) => {
  const [detail, setDetail] = useState(false);

  return (
    <div style={styles.itemWrap}>
      <img width="350px" height="250px" src={image} alt={name} />
      <p>Name: {name}</p>
      <p style={styles.more} onClick={() => setDetail(!detail)}>
        More ...
      </p>
      {detail && (
        <HogDetail specialty={specialty} greased={greased} weight={weight} />
      )}
    </div>
  );
};

export default HogItem;
