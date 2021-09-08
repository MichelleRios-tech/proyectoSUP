import React from "react";
import s from "./navbar.module.css"


function NavBar(props){
  return (
    <>
    <header>
        <nav>
          <ul>
            <li><a href="#">Logo</a></li>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Manga</a></li>
            <li><a href="#">Anime</a></li>
          </ul>
        </nav>
    </header>
    </>
  )
}