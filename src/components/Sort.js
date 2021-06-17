import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Sort({ order, category, setAscending, setDescending, setCategory }) {
	return (
		<div className="card-body">
			<button className="btn btn-primary" onClick={setDescending}>
				Descend
			</button>
			<button className="btn btn-primary" onClick={setAscending}>
				Ascend
			</button>
			<br />
			<DropdownButton id="dropdown-basic-button" title="Category">
				<li>
					<button className="dropdown-item" type="button" data-category="first" onClick={setCategory}>
						First Name
					</button>
				</li>
				<li>
					<button className="dropdown-item" type="button" data-category="last" onClick={setCategory}>
						Last Name
					</button>
				</li>
				<li>
					<button className="dropdown-item" type="button" data-category="email" onClick={setCategory}>
						Email
					</button>
				</li>
				<li>
					<button className="dropdown-item" type="button" data-category="phone" onClick={setCategory}>
						Phone
					</button>
				</li>
			</DropdownButton>
		</div>
	);
}

export default Sort;
