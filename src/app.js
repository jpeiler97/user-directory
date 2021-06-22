import React, { Component } from 'react';
import UserTable from './components/UserTable.js';
import './styles/Header.css';
class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<header>
					<h1>User Directory</h1>
				</header>
				<UserTable />
			</div>
		);
	}
}

export default App;
