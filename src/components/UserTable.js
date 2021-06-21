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
		query: '',
		userList: [],
		//saves userList for unfiltering (only necessary because the assignment uses an API call instead of pulling from a database)
		savedList: []
	};

	//Sets state of query input as user types
	handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	};

	//Gets new user list on component mount
	componentDidMount() {
		this.getNewList(25);
	}

	//Gets list of users by requesting from the Random User API and sets userList/savedList state to its results
	getNewList = (length) => {
		API.getResults(length)
			.then((res) => {
				console.log(res.data.results[0]);
				this.setState({ userList: res.data.results, savedList: res.data.results });
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
		console.log(this.state.userList);
	};

	//Sets the category to sort the table by
	setCategory = (event) => {
		this.setState({ category: event.target.dataset.category, categoryName: event.target.innerText.toLowerCase() });
	};

	//Filters user list by given query
	filterList = (event) => {
		event.preventDefault();
		console.log(this.state.query);
		const users = this.state.userList.filter((user) => {
			//defining currentUser so it can be used with array.prototype.includes()
			//which checks if the string includes the user's query
			let currentUser = user.name.first;
			return currentUser.includes(this.state.query);
		});
		this.setState({ userList: users });
	};

	//sets userList to savedList, since userList is overwritten when the user submits a filter
	unfilterList = (event) => {
		event.preventDefault();
		this.setState({ userList: this.state.savedList });
	};
	render() {
		return (
			<div className="row">
				<p>
					Sorting by {this.state.categoryName} in {this.state.orderName} order.
				</p>
				{/* Buttons to choose sort options */}
				<Sort
					setAscending={this.setAscending}
					setDescending={this.setDescending}
					setCategory={this.setCategory}
					query={this.query}
					filterList={this.filterList}
					handleInputChange={this.handleInputChange}
					unfilterList={this.unfilterList}
				/>
				<br />
				{/* User info table */}
				<table className="table">
					<thead>
						<tr>
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
									key={user.email}
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
									key={user.email}
									firstName={user.name.first}
									lastName={user.name.last}
									email={user.email}
									phone={user.phone}
								/>
							))
					)}
				</table>
			</div>
		);
	}
}

export default UserTable;
