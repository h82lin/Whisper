import React, { Component } from "react"
import { Link } from 'react-router-dom';

import "./css/Login.css"


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedIn: ''
        }
    }

    componentDidMount() {
        if(this.props.address === undefined){
          this.setState({loggedIn: "Click Here to Login"})
        }
        else {
          this.setState({loggedIn: "Logged in as: ".concat(this.props.address)})
        }
    }

    render() {
        return(
       			<div className="login">
            	<Link to="/SignUp">
                	<h5 className="loginWord">Login ID: {this.props.address}</h5>
              </Link>
            </div>
        )
    }
}

export default Login
