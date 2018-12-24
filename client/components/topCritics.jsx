import React from "react";
const TopCritics = ({ top_critics, consensus }) => {
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
                <span className="meter-tomato icon big medium-xs fresh pull-left" />
                <span className="meter-value superPageFontColor">
                  <span id="top_tomatometer">{top_critics.tomatometer}</span>%
                </span>
              </a>
            </div>

            <div id="scoreStats" className="hidden-xs">
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor">
                  Average Rating:{" "}
                </span>
                {top_critics.average_rating}/10
              </div>
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor">
                  Reviews Counted:{" "}
                </span>
                <span>{top_critics.reviews_counted}</span>
              </div>
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor audience-info">
                  Fresh:{" "}
                </span>
                <span>{top_critics.fresh}</span>
              </div>
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor audience-info">
                  Rotten:{" "}
                </span>
                <span>{top_critics.rotten}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-sm-12 tomato-info hidden-xs"
          style={{ paddingLeft: "0" }}
        >
          <div className="progress">
            <div className="progress-bar fresh" style={{ width: "68%" }} />
          </div>

          <p className="critic_consensus superPageFontColor">
            <span className="subtle superPageFontColor">
              Critics Consensus:
            </span>
            {consensus}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TopCritics;
