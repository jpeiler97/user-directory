import React from 'react';
import UserInfo from './components/UserInfo';
import Sort from './components/Sort';
import users from './users.json';

function App() {
	console.log(users);
	return (
		<div className="container">
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
		</div>
	);
}

export default App;
