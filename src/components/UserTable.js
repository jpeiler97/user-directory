import React, { Component } from 'react';
import users from '../users.json';
import UserInfo from './UserInfo';
import Sort from './Sort';

class UserTable extends Component {
	state = {
		order: 'descending',
		category: 'first',
		userList: users[0].results
	};

	sortByCategory = (category) => {
		return function(a, b) {
			console.log(a[category]);
			//Sorting function, compares the values for a given category and sorts them
			//a.name[category] allows the nested keys 'first' and 'last' to be checked as well
			if (a[category] > b[category] || a.name[category] > b.name[category]) return 1;
			else if (a[category] < b[category] || a.name[category] < b.name[category]) return -1;

			return 0;
		};
	};

	//Sets the order of the table as ascending
	setAscending = () => {
		this.setState({ order: 'ascending' });
	};

	//Sets the order of the table as descending
	setDescending = () => {
		this.setState({ order: 'descending' });
	};

	//Sets the category to sort the table by
	setCategory = (event) => {
		this.setState({ category: event.target.dataset.category });
	};

	render() {
		return (
			<div className="row">
				{/* User info table */}
				<table className="table">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Phone</th>
						</tr>
					</thead>
					{/* Conditional statement that either renders the user list in ascending/descending order based on this.state.order */}
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

				{/* Buttons to choose sort options */}
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
