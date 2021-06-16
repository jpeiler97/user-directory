import React from 'react';
import '../styles/UserInfo.css';

function UserInfo({ id, firstName, lastName, email, phone }) {
	return (
		<thead>
			<tr>
				<th scope="row">{id}</th>
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
