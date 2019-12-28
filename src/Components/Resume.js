import React, {Component} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import CustomNavbar from './CustomNavbar.js'
import Resume_v4 from '../images/Resume.png'
import '../App.css'

export default class Resume extends Component {

  render () {
    return (
      <div>
        <CustomNavbar></CustomNavbar>
        <Jumbotron>
          <div align="center">
            <div class="heading"> 
              <h1><b>Résumé</b></h1>
            </div>
              <img src={Resume_v4}/>
          </div>
        </Jumbotron>
      </div>
    );
  }
}