import React, { Component } from "react"

import "../css/CopyCat.css"

class CopyCat extends Component {
	render() {
		return(
				<div className="copyCat">
					<div className="progBar2">{this.props.pb}</div>
					<div className="artist2">{this.props.artist}</div>
					<div className="art2">{this.props.art}</div>
					<div className="title2">{this.props.title}</div>
				</div>
		)
	}
}

export default CopyCat