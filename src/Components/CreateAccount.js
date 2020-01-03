import React, {Component} from 'react'
import {Button, Jumbotron} from 'react-bootstrap'

import axios from 'axios'

import CustomNavbar from './CustomNavbar.js'
import '../App.css'


const CarServiceAPIHost = process.env.REACT_APP_CAR_SERVICE_HISTORY_APP

export default class CreateAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName:"",
      email:"",
      username:"",
      password: "",
      passwordConfirm: "",
      emailError: null,
      passwordError: null
    };
  
  }

  isDisabled = () => {
    if (this.state.emailError !== null){
      return true;
    } else  if (this.state.password !== this.state.passwordConfirm){
      return true;
    } else if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" || this.state.username === "" ||
               this.state.password === "" || this.state.passwordConfirm === "") {
      return true;
    } 
    return false;
  }

  handleFirstNameChange = (e) => {
    this.setState({firstName: e.target.value});
  }

  handleLastNameChange = (e) => {
    this.setState({lastName: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    if (validEmailRegex.test(this.state.email)){
      this.setState({'emailError': null});
    } else {
      this.setState({'emailError': "Invalid email"});
    }
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
    if (e.target.value === this.state.passwordConfirm){
      this.setState({'passwordError': null});
    } else {
      this.setState({'passwordError': "Passwords do not match"});
    }
  }

  handlePasswordConfirmChange = (e) => {
    this.setState({passwordConfirm: e.target.value});
    if (e.target.value === this.state.password){
      this.setState({'passwordError': null});
    } else {
      this.setState({'passwordError': "Passwords do not match"});
    }
  }

  returnToLogin = () => {
    window.location.replace("http://localhost:3000/serviceDashboard");
  }

  handleCreateAccount = () => {
    axios.post((CarServiceAPIHost + "users"), {
      'username' : this.state.username,
      'password' : this.state.password,
      'email': this.state.email,
      'first_name': this.state.firstName,
      'last_name': this.state.lastName

      }).then(function (response) {
        alert("Account created successfully");
        window.location.replace("http://localhost:3000/serviceDashboard");
      }).catch(function (error) {
        if (error.response.status === 401){
          alert("Username already used, pick another");
        }
      });
  }
  render () {
    return (
      <div align="center">   
        <CustomNavbar></CustomNavbar>
        <div class="add-space-large"/>
        <Jumbotron style={{ width: '40vw'}}>
          <h1><b>Create an Account</b></h1>
          <div className="add-space-top">
            <div className="form-input">
              <div>
                <label><b>First Name</b></label>
              </div>
              <div>
                <input style={{width: "15vw"}} value={this.state.firstName} onChange={this.handleFirstNameChange}/>
              </div>
            </div>
            <div className="form-input">
              <div>
                <label><b>Last Name</b></label>
              </div>
              <div>
                <input style={{width: "15vw"}} value={this.state.lastName} onChange={this.handleLastNameChange}/>
              </div>
            </div>
            <div className="form-input">
              <div>
                <label><b>Email</b></label>
              </div>
              <div>
                <input type="email" style={{width: "15vw"}} value={this.state.email} onChange={this.handleEmailChange}/>
                {this.state.emailError && 
                <div><font color="red">{this.state.emailError}</font></div>}
              </div>
            </div>
            <div className="form-input">
              <div>
                <label><b>Username</b></label>
              </div>
              <div>
                <input style={{width: "15vw"}} value={this.state.username} onChange={this.handleUsernameChange}/>
              </div>
            </div>
            <div className="form-input">
              <div>
                <label><b>Password</b></label>
              </div>
              <div>
                <input style={{width: "15vw"}} type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
              </div>
            </div>
            <div className="form-input">
              <div>
                <label><b>Confirm Password</b></label>
              </div>
              <div>
                <input style={{width: "15vw"}} type="password" value={this.state.passwordConfirm} onChange={this.handlePasswordConfirmChange}/>
                {this.state.passwordError && 
                <div><font color="red">{this.state.passwordError}</font></div>}
              </div>
            </div>
            <div className="form-input" >
              <Button variant="dark" onClick={this.handleCreateAccount} disabled={this.isDisabled()}>Submit</Button>
            </div>
            <div className="form-input" >
              <Button variant="dark" onClick={this.returnToLogin}>Return to Login</Button>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}