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
                <button className="btn btn-success" onClick={()=> mostrarAlerta()}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
                <input
                    className="form-control inputBuscar"
                    placeholder="¿Que quieres buscar hoy?"
                    onChange={handleChange}
                />
                <section class="menu_container">
                    <ul class = "menu_links">
                        <li class="menu_item menu_item--show">
                            <a href="#" class="menu_link"> <FontAwesomeIcon icon={faFilter}/></a>
                            <ul class="menu_nesting">
                                <li class="menu_inside">
                                    <a href="#" class= "menu_link menu_link-inside">Cancion</a>
                                </li>
                                <li class="menu_inside">
                                    <a href="#" class= "menu_link menu_link-inside">Artista</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
                
            </div>
        )
          
    }
}



export default Seeker