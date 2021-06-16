import React, { Component } from 'react';
import users from '../users.json';
import UserInfo from './UserInfo';
import Sort from './Sort';

class UserTable extends Component {
	state = {
		order: 'descending',
		category: 'First Name',
		userList: users[0].results
	};

	updateUserList = () => {
		const userList = users[0].results.sort((a, b) => {
			//Sorting based on category choice
			switch (this.state.category) {
				case 'First Name':
					return a.name.first.localeCompare(b.name.first);
				case 'Last Name':
					return a.name.last.localeCompare(b.name.last);
				case 'Phone':
					return a.phone.localeCompare(b.phone);
				case 'Email':
					return a.email.localeCompare(b.email);
				default: {
					break;
				}
			}
		});

		this.state.order === 'descending'
			? this.setState({ userList: userList.reverse() })
			: this.setState({ userList: userList });

		console.log(this.state.userList);
	};
	setAscending = () => {
		this.setState({ order: 'ascending' });
	};

	setDescending = () => {
		this.setState({ order: 'descending' });
	};

	setCategory = (event) => {
		this.setState({ category: event.target.innerText });
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
					{this.state.userList.map((user) => (
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
				<Sort
					order={this.state.order}
					category={this.state.category}
					setAscending={this.setAscending}
					setDescending={this.setDescending}
					setCategory={this.setCategory}
					updateUserList={this.updateUserList}
				/>
			</div>
		);
	}
}

export default UserTable;
