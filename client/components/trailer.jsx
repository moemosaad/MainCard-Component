import React from "react";

const Trailer = ({ video, trailer, toggleTrailer }) => {
  const handleClick = () => {
    toggleTrailer();
  };
  return trailer ? (
    <div>
      <div
        id="newTrailerModal"
        className="modal fade in"
        tabIndex="-1"
        aria-hidden="false"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-lg">
          <div className="closebutton" onClick={() => handleClick()}>
            <span className="glyphicon glyphicon-remove-circle lightGray" />
          </div>
          <div id="videoPlayer" style={{ width: "100%", height: "100%" }}>
            <iframe
              className="player"
              src={video.replace("watch?v=", "embed/") + "?autoplay=1&rel=0"}
              frameBorder="0"
              allowFullScreen
            />
            <div className="modal-backdrop fade in" style={{ zIndex: "-1" }} />
          </div>
        </div>
        <div className="fullWidth">
          <div className="btn btn-primary-rt closeBtn">
            <span className="glyphicon glyphicon-chevron-left" /> Go back
          </div>
          <div className="moreTrailer">
            <a className="btn btn-primary-rt" href="/trailers/">
              More trailers{" "}
              <span className="glyphicon glyphicon-chevron-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};
export default Trailer;
