import React, { useState } from "react";
import Nav from "./Nav";
import Hog from "./HogList";

import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);

  return (
    <div className="App">
      <Nav />
      <Hog hogs={hogs} />
    </div>
  );
}

export default App;
