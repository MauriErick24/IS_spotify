import { Component } from "react";

class TimeBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          currentTime: 0,
          duration: 0,
        };
      }
    
      componentDidMount() {
        // duración total de la canción (en segundos)
        const simulatedDuration = 180;
        this.setState({ duration: simulatedDuration });
    
        // actualización del tiempo actual cada segundo
        this.intervalId = setInterval(() => {
          this.setState(prevState => ({
            currentTime: prevState.currentTime < simulatedDuration ? prevState.currentTime + 1 : 0,
          }));
        }, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.intervalId);
      }
    
      handleTimeChange = event => {
        const newTime = parseInt(event.target.value, 10);
        this.setState({ currentTime: newTime });
      };
    
      formatTime = seconds => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
      };
    
      render() {
        const { currentTime, duration } = this.state;
    
        return (
          <div>
            //! Styles 
            {/* <audio controls>
              <source src="cancion.mp3" type="audio/mp3" />
            </audio> */}
            <div >
              <span>{this.formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={this.handleTimeChange}
              />
              <span>{this.formatTime(duration)}</span>
            </div>
          </div>
        );
      }
}
export default TimeBar