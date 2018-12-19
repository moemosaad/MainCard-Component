import React from "react";
const Rating = () => {
  return (
    <div
      id="rating-root"
      className="js-rating_section"
      data-movie-id="771498943"
    >
      <div
        id="rating_widget_desktop"
        className="col-sm-17 hidden-xs js-rating_widget_desktop"
      >
        <div className="rating_overlay" />
        <h3 className="rating_widget_desktop-header">
          <span id="rating_widget_header">ADD YOUR RATING</span>
        </h3>
        <div className="media rating_widget">
          <a rel="nofollow" className="pull-left hidden-xs" href="#">
            <img
              role="presentation"
              className="media-object pull-left js-rating_widget-user-thumb js-lazyLoad"
              data-src="/assets/pizza-pie/images/shared/actor.default.tmb.d17de9e26da.gif"
              //   src="/assets/pizza-pie/images/shared/actor.default.tmb.d17de9e26da.gif"
              data-revealed="true"
              //   style=" -webkit-animation: overlay-fade 1s 1; -o-animation: overlay-fade 1s 1; animation: overlay-fade 1s 1;"
            />
          </a>
          <div className="media-body">
            <div className="rating_widget-body">
              <div className="rating_widget-body-btn">
                <button type="button" value="-" className="ni js-rating_ni-btn">
                  - NOT INTERESTED
                </button>
              </div>
              <div className="rating_widget-body-btn">
                <button
                  type="button"
                  value="+"
                  className="wts js-rating_wts-btn"
                >
                  + WANT TO SEE
                </button>
              </div>

              <div className="rating_widget-body-star">
                <div className="rating_stars js-rating_stars">
                  <span
                    className="rating_star rating_star-label-right js-rating_star"
                    data-rating-value="5"
                  />
                  <span
                    className="rating_star rating_star-label-left js-rating_star"
                    data-rating-value="4.5"
                  />
                  <span
                    className="rating_star rating_star-label-right js-rating_star"
                    data-rating-value="4"
                  />
                  <span
                    className="rating_star rating_star-label-left js-rating_star"
                    data-rating-value="3.5"
                  />
                  <span
                    className="rating_star rating_star-label-right js-rating_star"
                    data-rating-value="3"
                  />
                  <span
                    className="rating_star rating_star-label-left js-rating_star"
                    data-rating-value="2.5"
                  />
                  <span
                    className="rating_star rating_star-label-right js-rating_star"
                    data-rating-value="2"
                  />
                  <span
                    className="rating_star rating_star-label-left js-rating_star"
                    data-rating-value="1.5"
                  />
                  <span
                    className="rating_star rating_star-label-right js-rating_star"
                    data-rating-value="1"
                  />
                  <span
                    className="rating_star rating_star-label-left js-rating_star"
                    data-rating-value="0.5"
                  />
                </div>
              </div>

              <div className="rating_textbox js-rating_textbox">
                <textarea
                  className="rating_textbox-textarea js-rating_textbox-textarea"
                  placeholder="Add a Review (Optional)"
                  autocomplete="off"
                />
                <div className="btn-group-xs rating_textbox-submit">
                  <span className="rating_textbox-submit-status js-rating_textbox-submit-status" />
                  <div className="rating_textbox-facebook js-rating_textbox-facebook hide">
                    <input
                      type="checkbox"
                      className="rating_textbox-facebook-check-box js-rating_textbox-facebook-check-box"
                    />
                    <span className="rating_textbox-facebook-logo" />
                    <span className="rating_textbox-facebook-check-text">
                      Share on Facebook
                    </span>
                  </div>
                  <button className="rating_textbox-submit-btn js-rating_textbox-submit-btn btn">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rating_widget_mobile" className="visible-xs">
        <div className="col-xs-8 mobile_rating_btn mobile_rating_btn-wts">
          <div className="js-rating_wts-btn off" value="+">
            <span className="glyphicon glyphicon-plus" />
            <br />
            <span className="rating_text">Want to See</span>
          </div>
        </div>
        <div className="col-xs-8 mobile_rating_btn mobile_rating_btn-ni">
          <div className="js-rating_ni-btn off">
            <span className="glyphicon glyphicon-ban-circle" />
            <br />
            <span className="rating_text">Not Interested</span>
          </div>
        </div>
        <div className="col-xs-8 mobile_rating_btn mobile_rating_btn-modal js-rating_modal-btn">
          <div>
            <span className="glyphicon glyphicon-star" />
            <br />
            <span className="rating_text">Add Rating</span>
          </div>
        </div>
        <div className="col-xs-24 rating_widget_mobile-star js-rating_modal-btn hide">
          My Rating&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="rating_widget_mobile-star-btn">
            <div className="star-rating rating-xs rating-disabled">
              <div
                className="rating-container rating-gly-star"
                data-content=""
              >
                <div className="rating-stars" data-content="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="rating_widget_modal"
        className="modal fade in"
        role="dialog"
        aria-hidden="false"
        style="display: none;"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="clearfix">
                <button
                  type="button"
                  className="close pull-right"
                  data-dismiss="modal"
                  aria-label="Close"
                  style="padding-left: 10px; padding-bottom: 10px;"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="row">
                <div className="col-xs-12 mobile_rating_btn mobile_rating_btn-wts">
                  <div className="js-rating_wts-btn off" value="+">
                    <span className="glyphicon glyphicon-plus" />
                    <br />
                    <span className="rating_text">Want to See</span>
                  </div>
                </div>
                <div className="col-xs-12 mobile_rating_btn mobile_rating_btn-ni">
                  <div className="js-rating_ni-btn off">
                    <span className="glyphicon glyphicon-ban-circle" />
                    <br />
                    <span className="rating_text">Not Interested</span>
                  </div>
                </div>
              </div>

              <div className="fullWidth rating_widget_modal-star">
                <div className="rating_stars js-rating_stars">
                  <span
                    className="rating_star rating_star-label-right js-rating_star"
                    data-rating-value="5"
                  />
                  <span
                    className="rating_star rating_star-label-left js-rating_star"
                    data-rating-value="4.5"
                  />
                  <span
                    className="rating_star rating_star-label-right js-rating_star"
                    data-rating-value="4"
                  />
                  <span
                    className="rating_star rating_star-label-left js-rating_star"
                    data-rating-value="3.5"
                  />
                  <span
                    className="rating_star rating_star-label-right js-rating_star"
                    data-rating-value="3"
                  />
                  <span
                    className="rating_star rating_star-label-left js-rating_star"
                    data-rating-value="2.5"
                  />
                  <span
                    className="rating_star rating_star-label-right js-rating_star"
                    data-rating-value="2"
                  />
                  <span
                    className="rating_star rating_star-label-left js-rating_star"
                    data-rating-value="1.5"
                  />
                  <span
                    className="rating_star rating_star-label-right js-rating_star"
                    data-rating-value="1"
                  />
                  <span
                    className="rating_star rating_star-label-left js-rating_star"
                    data-rating-value="0.5"
                  />
                </div>
              </div>

              <div className="rating_widget_modal-text_box">
                <div className="rating_textbox js-rating_textbox">
                  <textarea
                    className="rating_textbox-textarea js-rating_textbox-textarea clearfix"
                    placeholder="Add a Review (Optional)"
                    autocomplete="off"
                  />
                  <div className="btn-group-xs rating_textbox-submit clearfix">
                    <button className="rating_textbox-submit-btn js-rating_textbox-submit-btn btn">
                      Post
                    </button>
                    <div className="rating_textbox-facebook hide js-rating_textbox-facebook">
                      <input
                        type="checkbox"
                        className="rating_textbox-facebook-check-box js-rating_textbox-facebook-check-box"
                      />
                      <span className="rating_textbox-facebook-logo" />
                      <span className="rating_textbox-facebook-check-text">
                        Share on Facebook
                      </span>
                    </div>
                    <span className="rating_textbox-submit-status js-rating_textbox-submit-status" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
