import React from 'react';

function UserInfo({ firstName, lastName, email, phone, image }) {
	return (
		<thead>
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
		</thead>
	);
}

export default UserInfo;
