import React from "react";
import s from "./welcome.module.css";




function Welcome(props){
  return (
    <div className={s.contenedor}>
      <div className={s.bienvenida}>
        <h1>Hola Bienvenido!</h1>
        <p>
          Este es el proyecto que iniciamos de la mano de nuestro T.A.S de HENRY.
          el cual nos va servir para practicar nustro preyecto individual.
          
          ¡Vamos con toda!
        </p>
      </div>
    </div>
  )
}

export default Welcome;