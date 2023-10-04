import { Component } from "react";
import './header.css'
import Seeker from "../seeker/seeker"

class Header extends Component{
    render(){
        return(
            <div id="header-component">
                <div id="logo-header-component">
                    SPOTIFY
                </div>
                <div id="options-header-component">
                    <Seeker/>
                </div>
                
            </div>
        )
    }
}

export default Header;