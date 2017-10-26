import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import './App.css';

//form for entering
class EnterSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isSaved = true, should it be included here...
      savings: [],
      Description: "",
      Category: "",
      date: "",
      Amount: ""
    };
    //thisis the binding line necessary to keep this bound correctly
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeDescription(e){
    console.log('handleChangeDescription', e.target.value)
    this.setState({
      Description: e.target.value
    });
  }

  handleChangeCategory(e){
    console.log('handleChangeCategory', e.target.value)
    this.setState({
      Category: e.target.value
    });
  }
  handleChangeCategory(e){
    console.log('handleChangeCategory', e.target.value)
    this.setState({
      Category: e.target.value
    });
  }

  handleChangeAmount(e){
    console.log('handleChangeAmount', e.target.value)
    this.setState({
      Amount: e.target.value
    });
  }
  
  handleChangeDate(e){
    console.log('handleChangeDate', e)
    this.setState({
      date: e.target.value
    });
  }

  

  handleSubmit(e) {
    console.log('in savings value this is this.date.value', e)
    console.log("Description: ", this.state.Description);
    console.log("Category: ", this.state.Category);
    console.log("Amount: ", this.state.Amount);
    console.log("date: ", this.state.date);
    // e.preventDefault();
    let Description = this.state.Description;
    let Category = this.state.Category;
    let Amount = this.state.Amount;

    let date = this.state.date;
   

    //add all three variables to object {} -- let Object = {insert object of three variables}
    let newObject = {
      Description: Description,
      Category: Category,
      Amount: Amount,
      date: date,
      isSaved: true,
      userId: 10
    }
    //data: Ojbect of the three variables

    //re-set state based on updated form information...
    let tempArr = this.state.savings;
    tempArr.push(newObject)
    //add the new object (Object) to tempArr -- Google: ".shift() for objects"
    //setState to tempArr (which is already done below)
    console.log("state: ", this.state.savings);
    let a = this;
    axios.post('/bankRecords/savedList', {
      data: newObject//insert object of the three variables
    }).then(function (response) {
      a.setState({
        savings: tempArr
      })
    }).catch(function (error) {
      console.log("error: ", error);
    })

  }

  componentDidMount(){
    fetch("/bankRecords/savedList")
    .then((response) => response.json())
    .then((response) => this.setState({savings: response}))
  }
  
  
  render() {

    return (
      <div className="EnterSavingsWrapper">
        <h4>Choose your savings</h4>
        <form onSubmit={(e) => this.handleSubmit(e)}>       
          <div className="row highlight">
            <div className="input-field col s12">
              <input id="Description" type="text" className="validate" name="Description" onChange={this.handleChangeDescription}/>
              <label htmlFor="Description">Describe what you are saving on..</label>
            </div>
          </div>
      
          <div className="row highlight">
            <div className="col s12">  
              <h5>Category</h5>  
              <select name="Category" value={this.state.value} onChange={this.handleChangeCategory}>
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
          <br />
      
          <div className="row highlight">
            <div className="input-field col s12">
              <input type="number" name="Amount" className="validate"  onChange={this.handleChangeAmount}/>  
              <label htmlFor="Amount">Money saved ($)</label>
            </div>
          </div>
          <div className="row highlight">
            <div className="input-field col s12">
              <input type="date" name="date" className="datepicker" onSelect={this.handleChangeDate}/>  
              <label htmlFor="date">Created on</label>
            </div>
          </div>
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}
export default EnterSavings;
