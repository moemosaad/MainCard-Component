import React from "react";

const Score = ({score}) => {
  return (
    <div id="scorePanel" className="score_panel col-sm-17 col-xs-15">
      <div className="col-sm-16 col-xs-12 tmeter-panel">
        <ul className="pull-right hidden-xs" role="tablist">
          <li className="active pull-left critics-score">
            <a
              href="#all-critics-numbers"
              role="tab"
              data-toggle="tab"
              className="articleLink unstyled smaller gray superPageFontColor criticScoreLink"
            >
              All Critics
            </a>
          </li>
          <li className="pull-left superPageFontColor">&nbsp;|&nbsp;</li>
          <li className="pull-left critics-score">
            <a
              href="#top-critics-numbers"
              role="tab"
              data-toggle="tab"
              className="articleLink unstyled smaller gray superPageFontColor criticScoreLink"
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
            title=""
            data-original-title="The percentage of Approved Tomatometer Critics who have given this movie a positive review"
          />
        </h3>
        <div className="tab-content">
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
                      <span className="meter-tomato icon big medium-xs fresh pull-left" />
                      <span className="meter-value superPageFontColor">
                        <span>{score.all_critics.tomatometer}</span>%
                      </span>
                    </a>
                  </div>

                  <div id="scoreStats" className="hidden-xs">
                    <div className="superPageFontColor">
                      <span className="subtle superPageFontColor">
                        Average Rating:{" "}
                      </span>
                      {score.all_critics.average_rating}/10
                    </div>
                    <div className="superPageFontColor">
                      <span className="subtle superPageFontColor">
                        Reviews Counted:{" "}
                      </span>
                      <span>{score.all_critics.reviews_counted}</span>
                    </div>
                    <div className="superPageFontColor">
                      <span className="subtle superPageFontColor audience-info">
                        Fresh:{" "}
                      </span>
                      <span>{score.all_critics.fresh}</span>
                    </div>
                    <div className="superPageFontColor">
                      <span className="subtle superPageFontColor audience-info">
                        Rotten:{" "}
                      </span>
                      <span>{score.all_critics.rotten}</span>
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
                    className="progress-bar fresh"
                    style={{ width: "60%" }}
                  />
                </div>

                <p className="critic_consensus superPageFontColor">
                  <span className="subtle superPageFontColor">
                    Critics Consensus:
                  </span>
                  {score.consensus}
                </p>
              </div>
            </div>
          </div>
          <div id="top-critics-numbers" className="tab-pane">
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
                        <span>{score.top_critics.tomatometer}</span>%
                      </span>
                    </a>
                  </div>

                  <div id="scoreStats" className="hidden-xs">
                    <div className="superPageFontColor">
                      <span className="subtle superPageFontColor">
                        Average Rating:{" "}
                      </span>
                      {score.top_critics.average_rating}/10
                    </div>
                    <div className="superPageFontColor">
                      <span className="subtle superPageFontColor">
                        Reviews Counted:{" "}
                      </span>
                      <span>{score.top_critics.reviews_counted}</span>
                    </div>
                    <div className="superPageFontColor">
                      <span className="subtle superPageFontColor audience-info">
                        Fresh:{" "}
                      </span>
                      <span>{score.top_critics.fresh}</span>
                    </div>
                    <div className="superPageFontColor">
                      <span className="subtle superPageFontColor audience-info">
                        Rotten:{" "}
                      </span>
                      <span>{score.top_critics.rotten}</span>
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
                    className="progress-bar fresh"
                    style={{ width: "68%" }}
                  />
                </div>

                <p className="critic_consensus superPageFontColor">
                  <span className="subtle superPageFontColor">
                    Critics Consensus:
                  </span>
                  {score.consensus}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-full-xs visible-xs clearfix">
          <p className="critic_consensus tomato-info noSpacing superPageFontColor">
            <span className="subtle superPageFontColor">Critic Consensus:</span>
            {score.consensus}
          </p>
        </div>
      </div>
      <div className="col-sm-8 col-xs-12 audience-panel">
        <h3 className="scoreTitle superPageFontColor">
          AUDIENCE SCORE
          <span
            className="glyphicon glyphicon-question-sign hidden-xs"
            rel="tooltip"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="The percentage of users who have rated this movie 3.5 stars or higher"
          />
        </h3>
        <div className="audience-score meter">
          <a href="#audience_reviews" className="unstyled articleLink">
            <div className="meter media">
              <div className="meter-tomato icon big medium-xs upright pull-left" />
              <div className="media-body" style={{ lineHeight: "36px" }}>
                <div className="meter-value">
                  <span
                    className="superPageFontColor"
                    style={{ verticalAlign: "top" }}
                  >
                    {score.audience.audience_score}%
                  </span>
                </div>
                <div
                  className="smaller hidden-xs superPageFontColor"
                  style={{ paddingLeft: "5px", lineHeight: "12px" }}
                >
                  liked it
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="audience-info hidden-xs superPageFontColor">
          <div>
            <span className="subtle superPageFontColor">Average Rating:</span>
            {score.audience.average_rating}/5
          </div>

          <div>
            <span className="subtle superPageFontColor">User Ratings:</span>
            {score.audience.user_ratings}
          </div>
        </div>
      </div>
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
