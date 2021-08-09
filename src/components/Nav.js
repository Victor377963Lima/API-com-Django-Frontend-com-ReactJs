import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<header className="nav">
			<div className="logotipo">
				<h1 className="logotipo-nome">
					Desafio<span>TECH</span>
				</h1>
			</div>
			<div className="links-cadastros">
				<Link className="link-add" to="/">
					Adcionar usuário
				</Link>
				<Link className="link-list" to="/List">
					Listar usuário
				</Link>
			</div>
		</header>
	);
}

export default Nav;
