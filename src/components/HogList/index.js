import React, { useState } from "react";
import HogItem from "./HogItem";

// Styles
const styles = {
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

const HogList = ({ hogs }) => {
  const [greasedHog, setGreasedHog] = useState(false);
  const [showHogs, setShowHogs] = useState(true);

  const displayedHogs = greasedHog ? hogs.filter((hog) => hog.greased) : hogs;

  const hogList = displayedHogs.map((hog) => (
    <HogItem
      image={hog.image}
      name={hog.name}
      key={hog.id}
      specialty={hog.specialty}
      greased={hog.greased}
      weight={hog.weight}
    />
  ));

  return (
    <div>
      <input type="checkbox" onClick={() => setGreasedHog(!greasedHog)} />
      Greased Hogs
      <input type="checkbox" onClick={() => setShowHogs(!showHogs)} /> Hide Hogs
      {showHogs && <div style={styles.list}>{hogList}</div>}
    </div>
  );
};

export default HogList;
