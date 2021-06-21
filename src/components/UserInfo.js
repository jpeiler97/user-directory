import React from 'react';

function UserInfo({ firstName, lastName, email, phone, image }) {
	return (
		<tr>
			<td>
				{firstName} {lastName}
			</td>
			<td>
				<img src={image} alt="Profile" />
			</td>
			<td>{email}</td>
			<td>{phone}</td>
		</tr>
	);
}

export default UserInfo;
