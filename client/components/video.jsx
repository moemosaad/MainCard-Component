import React from "react";

const Video = props => {
  console.log(props);
  return (
    <div
      id="heroImageContainer"
      className="movie"
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${
          props.movie.movie.video.split("=")[1]
        }/default.jpg)`
      }}
    >
      <a className="trailer_play_action_button">
        <div className="heroImage movie js-lazyLoad" />

        <div className="playButton in">
          <span className="glyphicon glyphicon-play" />
        </div>
        <h1 className="title hidden-xs" data-type="title">
          {props.movie.movie.title}
        </h1>

        <span className="h3 year mobile-hide-year">
          {props.movie.movie.year}
        </span>
      </a>
    </div>
  );
};
export default Video;
