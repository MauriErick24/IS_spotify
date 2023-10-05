import { Component } from "react";
import './search_page.css';
import Header from "../../components/header/header";
import RelatedList from "../../components/related_list/related_list";

class Search_page extends Component{
    render(){
        return(
            <div id="container">
                <div id="header-search-page">
                    <Header/>
                    <hr/>
                </div>
                <div id="body-search-page">
                    <div id="resultados">
                        <h1>RESULTADOS</h1>
                        <RelatedList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search_page;