import { Component } from "react";
import './image.css'
import image from '../../images/default.png';

class Image extends Component{
    render(){
        return(
             <img id ="image" src={image}/>
        )
    }
}

export default Image