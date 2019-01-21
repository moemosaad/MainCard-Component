import React from "react";
import Audience from "./audience.jsx";
import Critics from "./critics.jsx";
const Score = ({ score, all, toggleTopCritics }) => {
  const handleClick = e => {
    toggleTopCritics(e);
  };
  return (
    <div id="scorePanel" className="score_panel col-sm-17 col-xs-15">
      <div className="col-sm-16 col-xs-12 tmeter-panel">
        <ul className="pull-right hidden-xs" role="tablist">
          <li className={(all ? "active " : "") + "pull-left critics-score"}>
            <a
              id="all"
              className="articleLink unstyled smaller gray superPageFontColor criticScoreLink"
              onClick={e => handleClick(e)}
              style={{ cursor: "pointer" }}
            >
              All Critics
            </a>
          </li>
          <li className="pull-left superPageFontColor">&nbsp;|&nbsp;</li>
          <li className={(all ? "" : "active ") + "pull-left critics-score"}>
            <a
              id="top"
              className="articleLink unstyled smaller gray superPageFontColor criticScoreLink"
              onClick={e => handleClick(e)}
              style={{ cursor: "pointer" }}
            >
              Top Critics
            </a>
          </li>
        </ul>
        <h3 className="scoreTitle superPageFontColor">
          TOMATOMETER{" "}
          <span
            className="glyphicon glyphicon-question-sign hidden-xs"
            data-toggle="tooltip"
            data-placement="bottom"
            title="The percentage of Approved Tomatometer Critics who have given this movie a positive review"
            data-original-title="The percentage of Approved Tomatometer Critics who have given this movie a positive review"
          />
        </h3>
        <div className="tab-content">
          <Critics
            top_critics={score.top_critics}
            all_critics={score.all_critics}
            consensus={score.consensus}
            all={all}
          />
        </div>
        <div className="col-full-xs visible-xs clearfix">
          <p className="critic_consensus tomato-info noSpacing superPageFontColor">
            <span className="subtle superPageFontColor">Critic Consensus:</span>
            {score.consensus}
          </p>
        </div>
      </div>
      <Audience audience={score.audience} />
      <div
        id="tomatometer_sponsorship_ad"
        className="page_ad hidden-xs"
        style={{ marginLeft: "-10px" }}
      >
        <div
          id="div-gpt-tomatometer-61507281"
          className="mps-slot"
          data-mps-slot="tomatometer"
          data-mps-loadset="0"
          data-google-query-id="CP-lhdDGrN8CFRwrTwodKH0PqA"
        >
          <div
            id="google_ads_iframe_/2620/rottentomatoes/movie/movie_page_10__container__"
            style={{ border: "none" }}
          >
            <iframe
              id="google_ads_iframe_/2620/rottentomatoes/movie/movie_page_10"
              title="3rd party ad content"
              name="google_ads_iframe_/2620/rottentomatoes/movie/movie_page_10"
              width="524"
              height="40"
              scrolling="no"
              marginWidth="0"
              marginHeight="0"
              frameBorder="0"
              srcDoc=""
              style={{ border: "0px", verticalAlign: "bottom" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
