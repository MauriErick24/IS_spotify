import { Component } from "react";
import Image from "../image/image";
import './related_music_card.css'

class RelatedMusicCard extends Component{
    render(){
        return(
            <div id="related-container">
                <Image />
                <p>Nombre de la cancion  | </p>
                <p>Album | </p>
                <p>Artista | </p>
                <p>Anio </p>
            </div>
        )
    }
}
export default RelatedMusicCard