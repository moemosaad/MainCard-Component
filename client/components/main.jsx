import React, { Component } from "react";
import Video from "./video.jsx";
import MovieImage from "./movieImage.jsx";
import ScorePanel from "./scorePanel.jsx";
import Rating from "./rating.jsx";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      movie: {
        _id: "",
        id: "",
        movie: {
          title: "",
          year: "",
          image: "",
          video: ""
        },
        critics_consensus: "",
        critic: {
          tomatometer: "",
          tomatometer_average_rating: "",
          reviews_counted: "",
          fresh: "",
          rotten: ""
        },
        audience: {
          audience_score: "",
          audience_score_average_rating: "",
          user_ratings: ""
        }
      }
    };
  }

  componentDidMount(id = 1) {
    fetch(`/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ movie: data[0] });
        console.log(this.state.movie);
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div id="mainColumn" className="col mob col-center-right col-full-xs">
        <Video movie={this.state.movie} />;
        <div id="topSection">
          <MovieImage />
          <ScorePanel />
          <Rating />
        </div>
      </div>
    );
  }
}

export default Main;
