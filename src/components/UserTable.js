import React, { Component } from 'react';
import UserInfo from './UserInfo';
import Sort from './Sort';
import API from '../utils/API';

class UserTable extends Component {
	state = {
		order: 'descending',
		orderName: 'descending',
		category: 'first',
		categoryName: 'first name',
		userList: []
	};

	componentDidMount() {
		this.getNewList(25);
	}

	getNewList = (length) => {
		API.getResults(length)
			.then((res) => {
				console.log(res.data.results[0]);
				this.setState({ userList: res.data.results });
			})
			.catch((err) => console.log(err));
	};

	sortByCategory = (category) => {
		return function(a, b) {
			//Sorting function, compares the values for a given category and sorts them
			//a.name[category] allows the nested keys 'first' and 'last' to be checked as well
			if (a[category] > b[category] || a.name[category] > b.name[category]) return 1;
			else if (a[category] < b[category] || a.name[category] < b.name[category]) return -1;

			return 0;
		};
	};

	//Sets the order of the table as ascending
	setAscending = (event) => {
		this.setState({ order: 'ascending', orderName: event.target.innerText.toLowerCase() });
	};

	//Sets the order of the table as descending
	setDescending = (event) => {
		this.setState({ order: 'descending', orderName: event.target.innerText.toLowerCase() });
	};

	//Sets the category to sort the table by
	setCategory = (event) => {
		this.setState({ category: event.target.dataset.category, categoryName: event.target.innerText.toLowerCase() });
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
									firstName={user.name.first}
									lastName={user.name.last}
									email={user.email}
									phone={user.phone}
								/>
							))
					)}
				</table>
				<br />
				<p>
					Sorting by {this.state.categoryName} in {this.state.orderName} order.
				</p>
				{/* Buttons to choose sort options */}
				<Sort
					setAscending={this.setAscending}
					setDescending={this.setDescending}
					setCategory={this.setCategory}
				/>
			</div>
		);
	}
}

export default UserTable;
