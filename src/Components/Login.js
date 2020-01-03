import React, {Component} from 'react'
import {Jumbotron, Button} from 'react-bootstrap'

import axios from 'axios'

import CustomNavbar from './CustomNavbar.js'
import '../App.css'


const CarServiceAPIHost = process.env.REACT_APP_CAR_SERVICE_HISTORY_APP

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
  }

  handleSubmit = () => {
    axios.post((CarServiceAPIHost + "login"), {
      'username' : this.state.username,
      'password' : this.state.password
    }).then((response) => {
        if (response.status === 200){
          localStorage.setItem('token', response.data['token']);
          localStorage.setItem('username', this.state.username);
          window.location.reload(true);
          return
        }
    }).catch((error) => {
      if (error.response.status === 401){
        alert("Invalid password");
        window.location.reload(true);
      } 
      
      if (error.response.status === 404){
        alert("Invalid username");
        window.location.reload(true);
      }
    });
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange = (e) =>{
    this.setState({ password: e.target.value });
  }

  render() {
    return(
      <div>
        <CustomNavbar></CustomNavbar>
        <Jumbotron style={{ width: '40vw'}}>
          <h1><b>Login</b></h1>
          <div className="add-space-top">
          <div className="form-input">
            <div>
              <label><b>Username</b></label>
            </div>
            <div>
              <input style={{width: "20vw"}} value={this.state.username} onChange={this.handleUsernameChange}/>
            </div>
          </div>
          <div className="form-input">
            <div>
              <label><b>Password</b></label>
            </div>
            <div>
              <input style={{width: "20vw"}} type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            </div>
          </div>
          <div className="form-input">
            <Button variant="dark" onClick={()=> {this.handleSubmit()}} disabled={this.state.password === "" || this.state.username === ""}>Submit</Button>
          </div>
          </div>
        </Jumbotron>
        <div>
          <div>
            Don't have an account yet?
          </div>
          <div>
            <Button variant="dark" href="/createAccount">Create an account</Button>
          </div>
        </div>
      </div>
    );
  }
}