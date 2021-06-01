import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <Link to="/"> Home </Link>
          <Link to="/formulario">Formulário</Link>
          <Link to="/drinks">Drinks</Link>
        </ul>
      </nav>
    </header>
  );
}
