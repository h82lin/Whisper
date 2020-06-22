import React, { Component } from "react"

import "./css/Search.css"

class Search extends Component {
	render() {
		return(
			<div className="search">
				<form>
					<input type="text" placeholder="Search" />	
				</form>
			</div>
		)
	}
}

export default Search