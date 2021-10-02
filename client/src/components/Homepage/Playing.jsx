import React, { Component } from "react";
import play from "../../icons/play.svg";
import pause from "../../icons/pause.svg";

class Playing extends Component {
  state = {
    audio: new Audio(this.props.source),
    isPlaying: false,
  };

  ChangeState = () => {
    console.log("props:", this.props.source);
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };
  render() {
    return (
      <img
        onClick={this.ChangeState}
        src={this.state.isPlaying ? pause : play}
        alt="play"
      />
    );
  }
}

export default Playing;
