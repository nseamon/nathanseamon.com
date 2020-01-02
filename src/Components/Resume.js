import React, {Component} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

import CustomNavbar from './CustomNavbar.js'
import Resume_v4 from '../images/Resume.png'
import '../App.css'

export default class Resume extends Component {

  render () {
    return (
      <div align="center">
        <CustomNavbar></CustomNavbar>
        <div class="add-space-large"/>
        <Jumbotron style={{width: "97vw"}}>
          <div align="center">
            <div class="heading"> 
              <h1><b>Résumé</b></h1>
            </div>
              <img src={Resume_v4} alt="Resume"/>
          </div>
        </Jumbotron>
      </div>
    );
  }
}