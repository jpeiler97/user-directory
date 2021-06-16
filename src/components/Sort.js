import React from 'react';

function Sort({ order, category, setAscending, setDescending, handleOrderSubmit }) {
	return (
		<div className="card-body">
			<p className="card-text">
				Order: {order} {category}
			</p>
			<button className="btn btn-primary" onClick={setDescending}>
				Descend
			</button>
			<button className="btn btn-primary" onClick={setAscending}>
				Ascend
			</button>
			<button className="btn btn-primary" onClick={handleOrderSubmit}>
				Submit
			</button>
		</div>
	);
}

export default Sort;
