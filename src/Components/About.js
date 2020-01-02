import React, {Component} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

import CustomNavbar from './CustomNavbar.js'
import '../App.css'

export default class About extends Component {

  render () {
    return (
      <div align="center">
        <CustomNavbar></CustomNavbar>
        <div class="add-space-large"/>
        <Jumbotron style={{width: "80vw"}}>
          <div align="center">
            <div class="heading"> 
              <h1><b>About Me</b></h1>
            </div>
            <div>
              Welcome to nathanseamon.com. As the website name suggests, I am indeed Nathan Seamon.
              I am a graduating senior in the Computer Science department of  
              <i> North Carolina State University</i> looking to apply my skills in the commercial sector. 
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}