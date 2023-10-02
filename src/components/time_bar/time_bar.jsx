import React, { Component } from "react";
import "./time_bar.css"
class TimeBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isPlaying: false,
      sound: this.props.sound
    };
    this.audioRef = React.createRef();
  }

  componentDidMount() {
    // Puedes agregar lógica adicional aquí, como cargar la fuente de audio.
  }

  handlePlayPause = () => {
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying,
    }), () => {
      if (this.state.isPlaying) {
        this.audioRef.current.play();
      } else {
        this.audioRef.current.pause();
      }
    });
  };

  handleTimeChange = (e) => {
    const currentTime = parseFloat(e.target.value);
    this.setState({ currentTime }, () => {
      this.audioRef.current.currentTime = currentTime;
    });
  };

  handleTimeUpdate = () => {
    this.setState({
      currentTime: this.audioRef.current.currentTime,
      duration: this.audioRef.current.duration,
    });
  };

  formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
  };
  

  render() {
    const { currentTime, duration, isPlaying } = this.state;

    return (
      <div>
        <audio
          ref={this.audioRef}
          onTimeUpdate={this.handleTimeUpdate}
          controls={false} // Desactiva los controles predeterminados
        >
          <source src={this.state.sound} type="audio/mp3" />
        </audio>

        <div>
          <span>{this.formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={this.handleTimeChange}
          />
          <span>{this.formatTime(duration)}</span>
          {/* <span onClick={this.handlePlayPause}>
              {isPlaying ? '⏸️' : '▶️'}
          </span> */}
          <div>
            <div id="play-pause" onClick={this.handlePlayPause}>
              {isPlaying ? '⏸️' : '▶️'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TimeBar