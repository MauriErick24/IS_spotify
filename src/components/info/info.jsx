import { Component } from "react";
import './info.css'

class Info extends Component{
    render(){
        return(
            <div id="info-component">
                <div id="name-info">
                    {this.props.name}
                </div>
                <div id="artist-info">
                    {this.props.artist}
                </div>
            </div>
        )
    }
}

export default Info