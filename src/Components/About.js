import React, {Component} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import CustomNavbar from './CustomNavbar.js'
import '../App.css'

export default class About extends Component {

  render () {
    return (
      <div>
        <CustomNavbar></CustomNavbar>
        <Jumbotron>
          <div align="center">
            <div class="heading"> 
              <h1><b>About Me</b></h1>
            </div>
            <div>
              Welcome to nathanseamon.com. I have created this website to showcase my web development<br/> skills and present my résumé to prospective employers.
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}