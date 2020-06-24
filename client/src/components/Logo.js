import React, { Component } from "react"
import { Link } from 'react-router-dom';

import "./css/Logo.css"


class Logo extends Component {	
	render() {
		const linkStyle = {color: 'transparent'}
		return (
			<div className="logo">
				<Link style={linkStyle} className='logobox' to="/">
					<div className='logo0'>d( o_o )b</div>
					<div className='logo1'>Whisper</div>
				</Link>
			</div>
		)
	}
}

export default Logo