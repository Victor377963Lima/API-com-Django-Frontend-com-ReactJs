import React from "react";

import List from "./components/List";
import Add from "./components/Add";

import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="container">
			{/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						Registros
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Adcionar usuário
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/List">
									Listar usuário
								</Link>
							</li>
						</ul>
					</div>
				</div>
	</nav>*/}

			<Switch>
				<Route path="/" component={Add} exact />
				<Route path="/list" component={List} />
			</Switch>
		</div>
	);
}

export default App;
