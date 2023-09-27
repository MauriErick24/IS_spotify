import { Component } from "react";
import './musicCard.css'

import Image from "../image/image";
import Info from "../info/info";
import PlayingComponent from "../playing_component/playingComponent";

class MusicCard extends Component{
    render(){
        return(
            <div id="music-card">
                <div id="music-image">
                    <Image/>
                </div>
                <div id="music-info">
                    <Info/>
                </div>
                <div id="music-playing">
                    <PlayingComponent/>
                </div>
            </div>
        )
    }
}
export default MusicCard;