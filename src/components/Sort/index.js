import React, { Component } from 'react';

class Sort extends React.Component {
	// Setting the initial state of the Counter component
	state = {
		sortOrder: -1,
		sortText: 'Descending'
	};

	// handleIncrement increments this.state.count by 1
	setDescending = () => {
		// We always use the setState method to update a component's state
		this.setState({ sortOrder: -1, sortText: 'Descending' });
	};
	setAscending = () => {
		// We always use the setState method to update a component's state
		this.setState({ sortOrder: 1, sortText: 'Ascending' });
	};
	// The render method returns the JSX that should be rendered
	render() {
		return (
			<div className="card-body">
				<p className="card-text">
					Order: {this.state.sortText} ({this.state.sortOrder})
				</p>
				<button className="btn btn-primary" onClick={this.setDescending}>
					Descend
				</button>
				<button className="btn btn-primary" onClick={this.setAscending}>
					Ascend
				</button>
			</div>
		);
	}
}

export default Sort;
