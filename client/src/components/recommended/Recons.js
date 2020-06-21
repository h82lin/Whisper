import React, { Component } from "react"

import "../css/Recons.css"

class Recons extends Component {
	render() {
		return(
				<div className="recons">
					<div className="artistr">{this.props.artist}</div>
					<img className="artr" src="{this.props.art}" alt="Album Art"/>
					<div className="titler">{this.props.title}</div>
					<div className="genrer">{this.props.genre}</div>
					<div className="dater">{this.props.date}</div>
				</div>
		)
	}
}

export default Recons