import React, { Component } from "react"
import { storage } from "../../firebase"

import "../css/AlbumArt.css"

class CurrentArt extends Component {
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
        return (
            <img src={this.state.albumA} alt="Album Art"/>
        )     
    }  
}

export default CurrentArt