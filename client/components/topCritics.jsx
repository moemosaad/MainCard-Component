import React from "react";
const TopCritics = ({ top_critics, consensus, all_critics_tomatometer }) => {
  return (
    <div id="top-critics-numbers" className="tab-pane active">
      <div className="row">
        <div className="col-sm-12">
          <div className="tomato-left">
            <div className="critic-score meter">
              <a
                href="#contentReviews"
                className="unstyled articleLink"
                id="tomato_meter_link"
              >
                <span
                  className={
                    "meter-tomato icon big medium-xs " +
                    (top_critics.top_critics_tomatometer > 59
                      ? top_critics.top_critics_tomatometer > 74 &&
                        all_critics_tomatometer > 74
                        ? "certified_fresh"
                        : "fresh"
                      : "rotten") +
                    " pull-left"
                  }
                />
                <span className="meter-value superPageFontColor">
                  <span id="top_tomatometer">
                    {top_critics.top_critics_tomatometer}
                  </span>
                  %
                </span>
              </a>
            </div>

            <div id="scoreStats" className="hidden-xs">
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor">
                  Average Rating:{" "}
                </span>
                {top_critics.top_critics_average_rating}/10
              </div>
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor">
                  Reviews Counted:{" "}
                </span>
                <span>{top_critics.top_critics_reviews_counted}</span>
              </div>
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor audience-info">
                  Fresh:{" "}
                </span>
                <span>{top_critics.top_critics_fresh}</span>
              </div>
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor audience-info">
                  Rotten:{" "}
                </span>
                <span>{top_critics.top_critics_rotten}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 tomato-info hidden-xs"
          style={{ paddingLeft: "0" }}
        >
          <div className="progress">
            <div
              className={
                "progress-bar " +
                (top_critics.top_critics_tomatometer > 59 ? "fresh" : "rotten")
              }
              style={{ width: top_critics.top_critics_tomatometer + "%" }}
            />
          </div>

          <p className="critic_consensus superPageFontColor">
            <span className="subtle superPageFontColor">Critics Consensus:</span>
            {consensus}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TopCritics;
