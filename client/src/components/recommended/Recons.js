import React, { Component } from "react"
import { storage } from "../../firebase"

import "../css/Recons.css"

class Recons extends Component {
	constructor() {
		super();
		this.state = {
			albumA: ''
		}
	  }

	componentDidMount() {
		this.getUrl().then(result => this.setState({
			albumA: result
		}))
	}

	getUrl() {
		const gsReference = storage.refFromURL(this.props.art)
		const url = gsReference.getDownloadURL()
		return url
	}

	render() {
		return(
				<div className="recons">
					<div className="artistr">
						<h1>{this.props.artist}</h1>
					</div>
					<div className="artr">
						<img  src={this.state.albumA} alt="Album Art"/>
					</div>
					<div className="titler">
						<h1>{this.props.title}</h1>
					</div>
				</div>
		)
	}
}

export default Recons