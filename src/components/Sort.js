import React from 'react';
import { DropdownButton } from 'react-bootstrap';

function Sort({ setAscending, setDescending, setCategory, query, filterList, handleInputChange, unfilterList }) {
	return (
		<div className="sort-area">
			<div className="card-body order-buttons">
				<div className="order-choices">
					<button className="btn btn-secondary gray-button" onClick={setDescending}>
						↓ Descending
					</button>
					<button className="btn btn-secondary gray-button" onClick={setAscending}>
						↑ Ascending
					</button>
				</div>
				<DropdownButton id="dropdown-basic-button" className="gray-button" title="Category">
					<li>
						<button className="dropdown-item" type="button" data-category="first" onClick={setCategory}>
							👥 First Name
						</button>
					</li>
					<li>
						<button className="dropdown-item" type="button" data-category="last" onClick={setCategory}>
							👥 Last Name
						</button>
					</li>
					<li>
						<button className="dropdown-item" type="button" data-category="email" onClick={setCategory}>
							✉️ Email
						</button>
					</li>
					<li>
						<button className="dropdown-item" type="button" data-category="phone" onClick={setCategory}>
							📞 Phone
						</button>
					</li>
				</DropdownButton>
			</div>
			<div className="card-body filter-buttons">
				<form className="form">
					<input
						value={query}
						name="query"
						type="text"
						onChange={handleInputChange}
						placeholder="Enter a First Name"
					/>

					<button className="btn btn-danger" type="button" onClick={unfilterList}>
						Unfilter
					</button>
				</form>
			</div>
		</div>
	);
}

export default Sort;
