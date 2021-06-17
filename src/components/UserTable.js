import React, { Component } from 'react';
import users from '../users.json';
import UserInfo from './UserInfo';
import Sort from './Sort';

class UserTable extends Component {
	state = {
		order: 'descending',
		category: 'name.first',
		userList: users[0].results
	};

	sortByCategory = (category) => {
		return function(a, b) {
			if (a[category] > b[category]) return 1;
			else if (a[category] < b[category]) return -1;

			return 0;
		};
	};

	updateUserList = () => {
		// if (this.state.order === 'ascending') {
		// 	console.log('ascending');
		// 	this.setState({ userList: users[0].results.sort(this.sortByCategory(this.state.category)) });
		// } else {
		// 	console.log(this.state.order);
		// 	this.setState({ userList: users[0].results.sort(this.sortByCategory(this.state.category)).reverse() });
		// }
		this.setState({ userList: users[0].results.sort(this.sortByCategory(this.state.category)) });
	};
	setAscending = () => {
		this.setState({ order: 'ascending' });
		console.log(this.state.order);
	};

	setDescending = () => {
		this.setState({ order: 'descending' });
		console.log(this.state.order);
	};

	setCategory = (event) => {
		this.setState({ category: event.target.dataset.category });
		console.log(this.state.category);
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
					{this.state.order} {this.state.category}
					{this.state.order === 'descending' ? (
						this.state.userList
							.sort(this.sortByCategory(this.state.category))
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
						this.state.userList
							.sort(this.sortByCategory(this.state.category))
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
					)}
				</table>
				<Sort
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
