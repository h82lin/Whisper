import React, { Component }from "react"
import { Link } from 'react-router-dom';

import "./css/Navbar.css"

class Navbar extends Component {
	render(){
		const linkStyle = {color: "transparent" }
		return(
			<div className="navbar">
				<Link style={linkStyle} to="/">
					<div className="navch1">Discover</div>
				</Link>
				<Link style={linkStyle} to="/Trending">
					<div className="navch">Trending</div>				
				</Link>
				<Link style={linkStyle} to="/Following">
					<div className="navch2">Following</div>				
				</Link>	
				<Link style={linkStyle} to="/Library">
					<div className="navch1">Library</div>				
				</Link>
				<Link style={linkStyle} to="/History">
					<div className="navch">History</div>				
				</Link>
				<Link style={linkStyle} to="/Uploads">
					<div className="navch">Uploads</div>				
				</Link>
				<Link style={linkStyle} to="/Listen Later">
					<div className="navch">Listen Later</div>				
				</Link>
				<Link style={linkStyle} to="/Favourites">
					<div className="navch2">Favourites</div>
				</Link>
			</div>
		)
	}
		
}

export default Navbar