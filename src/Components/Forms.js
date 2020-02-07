import React, {Component} from 'react'
import {Button, Jumbotron} from 'react-bootstrap'

import axios from 'axios'

import '../App.css'


const CarServiceAPIHost = process.env.REACT_APP_CAR_SERVICE_HISTORY_APP

export class AddCarForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      yearError: ""
    };
  }
  
  isDisabled = () => {
    if (this.state.make === "" || this.state.model === ""|| this.state.year === "" || this.state.yearError !== "") {
      return true;
    } 
    return false;
  }

  submit = () => {
    localStorage.getItem('token')
    axios.defaults.headers.Authorization = 'Bearer ' + localStorage.getItem('token');

    axios.post((CarServiceAPIHost + "cars"), {
      'make': this.state.make,
      'model': this.state.model,
      'trim': this.state.trim,
      'year': this.state.year,
      'owner': localStorage.getItem('username')

      }).then((response) => {
        this.props.handleNewCar();
      }).catch((error) => {
        if (error && error.response && error.response.status === 401) {
          localStorage.clear();
          window.location.reload(true);
        } else {
          alert("Your request was invalid");
        }
      }
    );
  }

  handleMakeChange = (e) => {
    this.setState({"make": e.target.value});
  }

  handleModelChange = (e) => {
    this.setState({"model": e.target.value});
  }

  handleYearChange = (e) => {
    const validYearRegex1 = RegExp(/^[1][9][0-9]{2}$/);
    const validYearRegex2 = RegExp(/^[2]0[0-9]{2}$/);
    if(isNaN(e.target.value)){
      e.target.value = this.state.year;
    } else if (!(validYearRegex1.test(e.target.value) || validYearRegex2.test(e.target.value))) {
      this.setState({"yearError": "Out of range"});
    } else {
      this.setState({"year": e.target.value});
      this.setState({"yearError": ""});
    }
  }

  handleTrimChange = (e) => {
    this.setState({"trim": e.target.value});
  }

  render() {
    return(
      <div>
        <div className="add-space-top">
          <Jumbotron style={{width: "30vw"}}>
            <h2> <b>Add Car Form</b></h2>
            <div className="form-input">
              <div>
                <label><b>Make</b></label>
              </div>
              <div>
                <input style={{width: "15vw"}} onChange={this.handleMakeChange}/>
              </div>
            </div>
            <div className="form-input">
              <div>
                <label><b>Model</b></label>
              </div>
              <div>
                <input style={{width: "15vw"}} onChange={this.handleModelChange}/>
              </div>
            </div>
            <div className="form-input">
              <div>
                <label><b>Trim</b> (Optional)</label>
              </div>
              <div>
                <input style={{width: "15vw"}} onChange={this.handleTrimChange}/>
              </div>
            </div>
            <div className="form-input">
              <div>
                <label><b>Year</b></label>
              </div>
              <div>
                <input style={{width: "15vw"}} onChange={this.handleYearChange}/>
                {!this.state.isValidYear && 
                <div><font color="red">{this.state.yearError}</font></div>}
              </div>
            </div>
            <div className="form-input">
              <Button variant="dark" disabled={this.isDisabled()} onClick={() => {this.submit()}}>Submit</Button>
            </div>
          </Jumbotron>
        </div>
      </div>
    )
  };
}

export class AddEntryForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mileage: "",
      service: "",
      date: "",
      dateError: "",
    };
  }

  isDisabled = () => {
    if (this.state.mileage === "" || this.state.date === "" || this.state.service === "" 
    || this.state.dateError !== "") {
      return true;
    }
    return false;
  };

  submit = () => {
    localStorage.getItem('token')
    axios.defaults.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    axios.post((CarServiceAPIHost + "service"), {
      'mileage': this.state.mileage,
      'service': this.state.service,
      'date': this.state.date,
      'id': this.props.id,

      }).then((response) => {
        this.props.handleNewEntry({'mileage': this.state.mileage, 'service': this.state.service,
        'date': this.state.date,'car_id': this.props.id});
      }).catch((error) => {
        if (error && error.response && error.response.status === 401) {
          localStorage.clear();
          window.location.reload(true);
        } else {
          alert("The was an error processing your request");
        }
      }
    );
  };

  handleDateChange = (e) => {
    const validDate = RegExp(/(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])-(19|20)\d\d$/);
    if (validDate.test(e.target.value)){
      this.setState({'date': e.target.value});
      this.setState({'dateError': ""});
    } else {
      this.setState({'dateError': "Date must be in format MM-DD-YYYY"});
    }
    
  };

  handleMileageChange = (e) => { 
    if(isNaN(e.target.value) || e.target.value < 0 ){
      e.target.value = this.state.mileage;
    } else {
      this.setState({'mileage': e.target.value});
    }
  };

  handleServiceChange = (e) => {
    this.setState({'service': e.target.value});
  };

  render() {
    return( 
      <div>
        <div className="add-space-top">
          <Jumbotron style={{width: "30vw"}}>
            <h2><b>Add Service Entry Form</b></h2>
            <div className="form-input">
              <div>
                <label><b>Mileage</b></label>
              </div>
              <div>
                <input style={{width: "20vw"}} onChange={this.handleMileageChange}/>
              </div>
            </div>
            <div className="form-input">
              <div>
                <label><b>Date</b></label>
              </div>
              <div>
                <input style={{width: "20vw"}} onChange={this.handleDateChange}  placeholder="MM-DD-YYYY"/>
                <div><font color="red">{this.state.dateError}</font></div>
              </div>
            </div>
            <div className="form-input">
              <div>
                <label><b>Service</b></label>
              </div>
              <div>
                <textarea style={{width: "20vw", height: "15vh"}} onChange={this.handleServiceChange}/>
              </div>
            </div>
            <div className="form-input">
              <Button variant="dark" disabled={this.isDisabled()} onClick={() => {this.submit()}}>Submit</Button>
            </div>
          </Jumbotron>
        </div>
      </div>
    )
  };  
}