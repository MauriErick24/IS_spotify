import { Component } from "react";
import './info.css'

class Info extends Component{
    render(){
        return(
            <div id="info-component">
                <div id="name-info">
                    Nombre de la cancion
                </div>
                <div id="artist-info">
                    ARTISTA
                </div>
            </div>
        )
    }
}

export default Info