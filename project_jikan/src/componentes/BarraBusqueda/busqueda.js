import React from "react";
import s from "./busqueda.module.css"

function Buscar(props){
    return (    
        <>
            <input className={s.i} type="text" />
            <button>Buscar</button>
        </>
    )

}