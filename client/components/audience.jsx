import React from "react";

const Audience = ({ audience }) => {
  return (
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
            <div
              className={
                "meter-tomato icon big medium-xs " +
                (audience.audience_score > 59 ? "upright" : "spilled") +
                " pull-left"
              }
            />
            <div className="media-body" style={{ lineHeight: "36px" }}>
              <div className="meter-value">
                <span
                  className="superPageFontColor"
                  style={{ verticalAlign: "top" }}
                >
                  {audience.audience_score}%
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
          {audience.average_rating}/5
        </div>

        <div>
          <span className="subtle superPageFontColor">User Ratings:</span>
          {audience.user_ratings}
        </div>
      </div>
    </div>
  );
};

export default Audience;
