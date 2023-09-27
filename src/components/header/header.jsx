import { Component } from "react";
import './header.css'

class Header extends Component{
    render(){
        return(
            <div id="header-component">
                <div id="logo-header-component">
                    SPOTIFY
                </div>
                <div id="options-header-component">
                    Espacio de mas opciones
                </div>
                
            </div>
        )
    }
}

export default Header;