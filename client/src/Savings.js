import React, { Component } from 'react';
import EnterSavings from './EnterSavings.js';
import SavingsSummary from './SavingsSummary.js';
import AllSavings from './AllSavings.js';
import './App.css';

//parent component
class Savings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      savings: []
      
    }
    this.setSavings = this.setSavings.bind(this);
    this.addSaving = this.addSaving.bind(this);
  }

  setSavings(savings){
    this.setState({
      savings: savings
    })
  }

  addSaving(saving){
    let temp = this.state.savings;
    temp.push(saving);
    this.setState({
      savings: temp
    })
  }

  componentDidMount() {
    let user = this.props.user
    this.setState({
      user: user
    })
    fetch('/bankRecords/' + user)
      .then(response => response.json())
      .then(response => this.setState({records: response}))
    }


  render() {
    let user = this.props.user
    // console.log("user in client/Savings.js: ", user);
    return (

      <div className="SavingsWrapper container ">
       
        <EnterSavings  addSaving={this.addSaving} user={user}/>
        <AllSavings savings={this.state.savings}  setSavings={this.setSavings} user={user}/>
        {/* <SavingsSummary user={user}/> */}
        <div className="fixed-action-btn toolbar">
    <a className="btn-floating btn-large #26a69a teal lighten-1">
      <i className="large material-icons">flare</i>
    </a>
  
    <ul>
      <li className="waves-effect waves-light"><a href="#!"><i >Here you can add your savings</i></a></li>
      </ul>
  </div>
      </div>

    );
  }
}
export default Savings;
