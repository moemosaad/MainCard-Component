import React from "react";
import TopCritics from "./topCritics.jsx";
import AllCritics from "./allCritics.jsx";
const Critics = ({ all_critics, top_critics, consensus, all }) => {
  if (all) {
    return <AllCritics all_critics={all_critics} consensus={consensus} />;
  } else {
    return <TopCritics top_critics={top_critics} consensus={consensus} />;
  }
};

export default Critics;
