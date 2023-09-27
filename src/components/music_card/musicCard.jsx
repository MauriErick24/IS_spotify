import { Component } from "react";
import './musicCard.css'

import Image from "../image/image";
import Info from "../info/info";
import PlayingComponent from "../playing_component/playingComponent";

class MusicCard extends Component{
    render(){
        return(
            <div id="music-card">
                <div>
                    <Image/>
                </div>
                <div>
                    <Info/>
                </div>
                <div>
                    <PlayingComponent/>
                </div>
            </div>
        )
    }
}
export default MusicCard;