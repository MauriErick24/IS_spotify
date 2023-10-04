import { Component } from "react";
import './seeker.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

class Seeker extends Component{
    render(){
        return(
            <div className="containerInput">
                <input
                    className="form-control inputBuscar"
                    placeholder="¿Que quieres buscar hoy?"
                />
                <button className="btn btn-filtro">
                    <FontAwesomeIcon icon={faFilter}/>
                </button>
                <button className="btn btn-success">
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
        )
          
    }
}


export default Seeker