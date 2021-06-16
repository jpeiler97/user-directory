import React, { Component } from 'react';
import users from '../users.json';
import UserInfo from './UserInfo';
import Sort from './Sort';

class UserTable extends Component {
	state = {
		order: 'descending',
		category: 'id',
		userList: users[0].results
	};

	setAscending = () => {
		this.setState({ order: 'ascending' });
	};

	setDescending = () => {
		this.setState({ order: 'descending' });
	};

	handleOrderSubmit = (event) => {
		event.preventDefault();
		this.searchGiphy(this.state.order);
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
					{this.state.order === 'ascending' ? (
						[ ...this.state.userList ]
							.reverse()
							.map((user) => (
								<UserInfo
									key={user.id}
									id={user.id}
									firstName={user.name.first}
									lastName={user.name.last}
									email={user.email}
									phone={user.phone}
								/>
							))
					) : (
						[ ...this.state.userList ].map((user) => (
							<UserInfo
								key={user.id}
								id={user.id}
								firstName={user.name.first}
								lastName={user.name.last}
								email={user.email}
								phone={user.phone}
							/>
						))
					)}
				</table>
				<Sort
					order={this.state.order}
					category={this.state.category}
					setAscending={this.setAscending}
					setDescending={this.setDescending}
					handleOrderSubmit={this.handleOrderSubmit}
				/>
			</div>
		);
	}
}

export default UserTable;
