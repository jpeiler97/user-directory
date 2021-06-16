import React from 'react';

function UserInfo({ firstName, lastName, email, phone }) {
	return (
		<div>
			<ul>
				{firstName} {lastName}
			</ul>
			<ul>{email}</ul>
			<ul>{phone}</ul>
			<br />
		</div>
	);
}

export default UserInfo;
