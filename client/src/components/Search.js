import React, { Component } from "react"

import "./css/Search.css"

class Search extends Component {
	render() {
		return(
			<div>
			<form>
				<input className="search" type="text" placeholder="Search" />	
			</form>
			</div>
		)
	}
}

export default Search