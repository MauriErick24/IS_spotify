import { Component } from "react";
import './playing_page.css';
import Header from "../../components/header/header";
import MusicCard from "../../components/music_card/musicCard";
import RelatedList from "../../components/related_list/related_list";

class PlayingPage extends Component{
    render(){
        return(
            <div id="container">
                <div id="header-playing-page">
                    <Header/>
                    <hr/>
                </div>
                <div id="body-playing-page">
                    <div id="playing">
                        <p id='playing-p'>EN REPRODUCCION</p>
                        <MusicCard/>
                    </div>
                    <div id="related">
                        <p id='playing-p'> RELACIONADOS</p>
                        <RelatedList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayingPage;