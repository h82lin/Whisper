import React, { Component } from "react"

import "./css/Discover.css"
import "./css/Tracks.css"
import "./css/Uploads.css"

class SignUp extends Component {
    constructor(props) {
          super(props)
          this.state = {
              account:'',
              web3: this.props.web3,
              accounts: this.props.accounts,
              contract: this.props.contract
          }
          this.handleAccountChange = this.handleAccountChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAccountChange = event => {
        this.setState({
            account: event.target.value
        })
    }

    handleSubmit = event => {
      this.props.getAccount(this.state.account);
      event.preventDefault()
      alert("Submitted!")
    }


    render() {
        const { username, password, password2 } = this.state
        return(
      <div className="mid">
                <form onSubmit={this.handleSubmit} className="uploadForm">
                    <div>
                        <label>Enter your account: </label>
                        <input
                        type='text'
                        value={this.state.account}
                        onChange={this.handleAccountChange}
                        />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
    )
  }

}
export default SignUp
