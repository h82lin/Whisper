import React, { Component } from "react"

import "./css/Search.css"

class Search extends Component {
	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	updateSearch(event) {
		this.setState({search: event.target.value})
		console.log(this.state.search)
	}

	render() {
		let filtered = this.props.contacts;
		return(
			<div className="search">
				<form>
					<input 
					type="text" 
					placeholder="Search" 
					value={this.state.search}
					onChange={this.updateSearch.bind(this)}
					/>	
				</form>
			</div>
		)
	}
}

export default Search