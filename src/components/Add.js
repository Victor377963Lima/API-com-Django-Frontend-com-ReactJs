import React from "react";
import "../styles/Add.css";
import InputMask from 'react-input-mask'

class Add extends React.Component {
	constructor() {
		super();
		this.state = {
			cpf: "",
			email: "",
		};

		this.changeHandler = this.changeHandler.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	changeHandler(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	submitForm() {
		fetch("http://127.0.0.1:8000/usuarios/", {
			method: "POST",
			body: JSON.stringify(this.state),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));

		this.setState({
			cpf: "",
			email: "",
		});
	}

	render() {
		return (
			<div className="container-form">
				<form className="formulario-add">
					<label>CPF</label>
					<p className="obg">(Obrigatório)</p>
					<InputMask
						{...this.props}
						mask = '999.999.999-99'
						maskChar = ''
						value={this.state.cpf}
						name="cpf"
						onChange={this.changeHandler}
						type="text"
						maxLength="14"
						className="formulario-cpf"
					/>

					<label>Email</label>
					<p className="obg">(Obrigatório)</p>
					<input
						value={this.state.email}
						name="email"
						onChange={this.changeHandler}
						type="text"
						className="formulario-email"
					/>
					<div className="button">
						<button
							type="submit"
							onClick={this.submitForm}
							className="btn btn-primary"
						>
							Cadastrar
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Add;
