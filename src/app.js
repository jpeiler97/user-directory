import React, { Component } from 'react';
import UserTable from './components/UserTable.js';

class App extends Component {
	render() {
		return (
			<div className="container">
				<UserTable />
			</div>
		);
	}
}

export default App;
