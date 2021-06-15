import React from 'react';
import UserInfo from './components/UserInfo.js';
import users from './users.json';

function App() {
	console.log(users);
	return (
		<div>
			{users[0].results.map((user) => (
				<UserInfo firstName={user.name.first} lastName={user.name.last} email={user.email} phone={user.phone} />
			))}
		</div>
	);
}

export default App;
