import React from "react";

const AllCritics = ({ all_critics, consensus, top_critics_tomatometer }) => {
  return (
    <div id="all-critics-numbers" className="tab-pane active">
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
                    (all_critics.tomatometer > 59
                      ? all_critics.tomatometer > 74 &&
                        top_critics_tomatometer > 74
                        ? "certified_fresh"
                        : "fresh"
                      : "rotten") +
                    " pull-left"
                  }
                />
                <span className="meter-value superPageFontColor">
                  <span id="all_tomatometer">{all_critics.tomatometer}</span>%
                </span>
              </a>
            </div>

            <div id="scoreStats" className="hidden-xs">
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor">
                  Average Rating:{" "}
                </span>
                {all_critics.average_rating}/10
              </div>
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor">
                  Reviews Counted:{" "}
                </span>
                <span>{all_critics.reviews_counted}</span>
              </div>
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor audience-info">
                  Fresh:{" "}
                </span>
                <span>{all_critics.fresh}</span>
              </div>
              <div className="superPageFontColor">
                <span className="subtle superPageFontColor audience-info">
                  Rotten:{" "}
                </span>
                <span>{all_critics.rotten}</span>
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
                (all_critics.tomatometer > 59 ? "fresh" : "rotten")
              }
              style={{ width: all_critics.tomatometer + "%" }}
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

export default AllCritics;
