import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Sort({ setAscending, setDescending, setCategory, query, filterList, handleInputChange }) {
	return (
		<div className="card-body">
			<button className="btn btn-primary" onClick={setDescending}>
				Descending
			</button>
			<button className="btn btn-primary" onClick={setAscending}>
				Ascending
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

			<form className="form">
				<input
					value={query}
					name="query"
					type="text"
					onChange={handleInputChange}
					placeholder="Enter a First Name"
				/>
				<button onClick={filterList}>Submit Query</button>
			</form>
		</div>
	);
}

export default Sort;
