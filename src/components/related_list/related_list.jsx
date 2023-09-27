import { Component } from "react";
import RelatedMusicCard from "../related_music_card/related_music_card";
import './related_list.css'

class RelatedList extends Component{
    state={
        songs:[
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
        ]
    }
    render(){
        return(
            <div>
                {this.state.songs.map((s) => {
                    return(
                       <div id="related-list">
                         <RelatedMusicCard/>
                       </div>
                    )
                })}
            </div>
        )
    }
}

export default RelatedList;