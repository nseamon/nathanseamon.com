import React, {Component} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import CustomNavbar from './CustomNavbar.js'
import Button from 'react-bootstrap/Button'
import './CarServiceHistory.css'



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
    //todo
  }

  handleUsernameChange = (e) =>{
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
              <input style={{width: "20vw"}} value={this.state.password} onChange={this.handlePasswordChange}/>
            </div>
          </div>
          <div className="form-input">
            <Button variant="dark" onClick={this.handleSubmit}>Submit</Button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}