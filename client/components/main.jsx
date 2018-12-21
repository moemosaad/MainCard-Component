import React, { Component } from "react";
import Video from "./video.jsx";
import Poster from "./poster.jsx";
import Score from "./score.jsx";
import Rating from "./rating.jsx";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      movie: {
        _id:"",
        id: "",
        video: {
          title: "",
          year: "",
          video: ""
        },
        poster: {
          image: ""
        },
        score: {
          all_critics: {
            tomatometer: "",
            average_rating: "",
            reviews_counted: "",
            fresh: "",
            rotten: ""
          },
          consensus: "",
          audience: {
            audience_score: "",
            average_rating: "",
            user_rating: ""
          },
          top_critics: {
            tomatometer: "",
            average_rating: "",
            reviews_counted: "",
            fresh: "",
            rotten: ""
          }
        }
      }
    };
  }

  componentDidMount(id = 20) {
    fetch(`/movies/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data[0])
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
        <Video video={this.state.movie.video} />
        <div id="topSection">
          <Poster poster={this.state.movie.poster} />
          <Score score={this.state.movie.score} />
          <Rating />
        </div>
      </div>
    );
  }
}

export default Main;
