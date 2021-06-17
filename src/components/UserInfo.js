import React from 'react';

function UserInfo({ firstName, lastName, email, phone }) {
	return (
		<thead>
			<tr>
				<td>
					{firstName} {lastName}
				</td>
				<td>{email}</td>
				<td>{phone}</td>
			</tr>
		</thead>
	);
}

export default UserInfo;
