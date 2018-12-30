import React from "react";
import TopCritics from "./topCritics.jsx";
import AllCritics from "./allCritics.jsx";
const Critics = ({ all_critics, top_critics, consensus, all }) => {
  if (all) {
    return (
      <AllCritics
        all_critics={all_critics}
        top_critics_tomatometer={top_critics.tomatometer}
        consensus={consensus}
      />
    );
  } else {
    return (
      <TopCritics
        top_critics={top_critics}
        all_critics_tomatometer={all_critics.tomatometer}
        consensus={consensus}
      />
    );
  }
};

export default Critics;
