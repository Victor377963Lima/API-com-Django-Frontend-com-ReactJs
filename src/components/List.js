import React from "react";
import "../styles/List.css";

class List extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	fetchData() {
		fetch("http://127.0.0.1:8000/usuarios/")
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					data: data,
				});

				console.log(data);
			});
	}

	componentDidMount() {
		this.fetchData();
	}

	render() {
		const empData = this.state.data;
		const rows = empData.map((emp) => (
			<tr>
				<td>{emp.id}</td>
				<td>{emp.cpf}</td>
				<td>{emp.email}</td>
			</tr>
		));

		return (
			<div className="container-table">
				<div className="table">
					<table>
						<thead className="tabela-head">
							<tr>
								<th>ID</th>
								<th>CPF</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default List;
