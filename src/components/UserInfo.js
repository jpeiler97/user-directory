import React from 'react';

function UserInfo({ firstName, lastName, email, phone, id }) {
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
