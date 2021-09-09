import React from "react";
import s from "./welcome.module.css";
import video from "./bg_video.mp4"




function Welcome(props){
  return (
    
    <div className={s.contenedor}>
      <video id={s.background-video} autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
      <source src={video} type="video/mp4"/>
    </video>
      <div className={s.bienvenida}>
        <div id={s.textContainer}>
        <h1>Hola Bienvenido xd!</h1>
        <p>
          Este es el proyecto que iniciamos de la mano de nuestro T.A.S de HENRY.
          el cual nos va servir para practicar nustro preyecto individual.
          
          ¡Vamos con toda!
        </p>
        </div>
      </div>
      
    </div>
  )
}

export default Welcome;