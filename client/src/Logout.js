import React, { Component } from 'react';


class Logout extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    e.preventDefault()
    localStorage.removeItem('mernToken')
    this.props.logout()
  }

  render() {
    return (
     <div>
        <a onClick={this.handleLogout}>Logout</a>
  
     </div>
    );
  }
}

export default Logout;