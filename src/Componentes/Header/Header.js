import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul class={style.container}>
          <Link className={style.link} to="/drinks">Drinks</Link>
          <Link className={style.link} to="/sobrenos">Sobre Nós</Link>
          <Link className={style.link} to="/"> Home </Link>
          <Link className={style.link} to="/contato">Contato</Link>
          <Link className={style.link} to="/nossotime">Nosso Time</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header