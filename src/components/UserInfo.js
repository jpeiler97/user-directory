import React from 'react';

function UserInfo(props) {
	return (
		<div>
			<ul>
				{props.firstName} {props.lastName}
			</ul>
			<ul>{props.email}</ul>
			<ul>{props.phone}</ul>
			<br />
		</div>
	);
}

export default UserInfo;
