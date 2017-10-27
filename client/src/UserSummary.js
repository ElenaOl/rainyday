import React, { Component } from 'react';
import './App.css';


class UserSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childProp:""
    }
  }



  render() {

    return (
      <div className="UserSummaryWrapper">
        <p>UserSummary Page</p>
        <div class="row">
      <div class="col s6 m6">
        <div class="card ">
          <div class="card-content blue-text">
            <span class="card-title">Login</span>
            <form onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="col s12">
            
                <span>
                    <input type="checkbox" id="savings" />
                    <label for="savings">Include All savings</label>
                  </span>
                </div>
                <div class="col s12">
              
                <span>
                  <input type="checkbox" id="lastmonth" />
                  <label for="lastmonth">Include last month's spending</label>
                </span>
              </div>
           </div>
           <div className="row highlight">
            <div className="col s12">  
              <h5>Sort by Category</h5>  
              <select name="Category">
                <option  value="" disabled defaultValue> </option>
                <option value="Bills">Bills</option>
                <option value="Groceries">Groceries</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Clothes">Clothes</option>
                <option value="Dining Out">Dining Out</option>
                <option value="Vices">Vices</option>
                <option value="Debt">Debt</option>
                <option value="Housing">Housing</option>
                <option value="Savings">Savings</option>
                <option value="Health">Health</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </div>  
          </div> 
            <div class="switch">
    <label>
      Off
      <input type="checkbox"/>
      <span class="lever"></span>
      On
    </label>
  </div>
 
      </form>
          </div>
        
        </div>
      </div>
    </div>
      </div>
    );
  }
}
export default UserSummary;
