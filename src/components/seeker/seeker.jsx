import { Component, useState } from "react";
import './seeker.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

class Seeker extends Component{
    
    
    render(){
        const handleChange=e=>{
            console.log("Busqueda: "+e.target.value);
        }
        const mostrarAlerta=()=>{
            swal({
                title: "Busqueda Finalizada",
                text: "Parece que perdi la memoria porque no encuentro eso.",
                icon: "warning"
            })
        }
        return(
            
            <div className="containerInput">
                <input
                    className="form-control inputBuscar"
                    placeholder="¿Que quieres buscar hoy?"
                    onChange={handleChange}
                />
                <button className="btn btn-filtro">
                    <FontAwesomeIcon icon={faFilter}/>
                </button>
                <button className="btn btn-success" onClick={()=> mostrarAlerta()}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
        )
          
    }
}


export default Seeker