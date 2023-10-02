import { Component } from "react";
import './musicCard.css'

import Image from "../image/image";
import Info from "../info/info";
import PlayingComponent from "../playing_component/playingComponent";
import TimeBar from "../time_bar/time_bar";
import Sound from '../../sounds/understand.mp3'

class MusicCard extends Component{
    state={
        name: "Understand",
        artist: "BoyWithUke"
    }
    render(){
        return(
            <div id="music-card">
                <div id="music-image">
                    <Image/>
                </div>
                <div id="music-info">
                    <Info name={this.state.name}
                          artist={this.state.artist}/>
                </div>
                <div id="time-bar">
                    <TimeBar sound={Sound}/>
                </div>
                <div id="music-playing">
                    {/* <PlayingComponent/> */}
                </div>
            </div>
        )
    }
}
export default MusicCard;