import React, { Component } from 'react';
import users from '../users.json';
import UserInfo from './UserInfo';
import Sort from './Sort';

class UserTable extends Component {
	handleOrderChoice = (event) => {
		event.preventDefault();
		this.searchGiphy(this.state.search);
	};

	render() {
		return (
			<div className="row">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Phone</th>
						</tr>
					</thead>
					{users[0].results.map((user) => (
						<UserInfo
							key={user.id}
							id={user.id}
							firstName={user.name.first}
							lastName={user.name.last}
							email={user.email}
							phone={user.phone}
						/>
					))}
				</table>
				<Sort />
			</div>
		);
	}
}

export default UserTable;
