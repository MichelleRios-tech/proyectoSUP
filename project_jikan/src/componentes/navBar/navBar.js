import React from "react";
import s from "./navBar.module.css";

function NavBar(props) {
  return (
    <>
      <header className={s.header}>
        <nav>
          <ul className={s.ul_navBar}>
            <li>
              <a href='#'>Logo</a>
            </li>
            <li>
              <a href='#'>Inicio</a>
            </li>
            <li>
              <a href='#'>Manga</a>
            </li>
            <li>
              <a href='#'>Anime</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
