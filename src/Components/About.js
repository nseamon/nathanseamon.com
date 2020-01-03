import React, {Component} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

import CustomNavbar from './CustomNavbar.js'
import '../App.css'
import ExampleDashboard from '../images/DashboardScreenshot.png'

export default class About extends Component {

  render () {
    return (
      <div align="center">
        <CustomNavbar></CustomNavbar>
        <div class="add-space-large"/>
        <Jumbotron style={{width: "80vw"}}>
          <div align="left">
            <div class="heading" align="center"> 
              <h1><b>About Me</b></h1><br/>
            </div>
            <div>
              <h2><b> Welcome to nathanseamon.com!</b></h2><br/>
              <p style={{"text-align": "justify"}}>
                I am a graduating senior in the Computer Science department of  
                <i> North Carolina State University</i> looking to apply my skills in the commercial sector. I have always 
                has a passion for learning how things work, whether that be a household appliance, car, or a computer. My thirst for
                understanding how complex systems work has lead me into Computer Science. I love learning how software/technologies work
                just as much as I enjoy developing my own! Please see my Résumé listed on my site for more details about my background
                and qualifications. 
              </p>
              <br/>
              <div align="left">
                <br/><h1><b>Projects:</b></h1><br/>
              </div>
              <h3><b>Car Service History Service</b></h3>
              <p style={{"text-align": "justify"}}>
                Do you hate having ugly stickers on your car's windshield telling you when your last oil change was? 
                Do you work on your own car and lack dealership records of car services? If you answered yes to either 
                question, Car Service History Service was made for you! After creating an account with Car Service History Service
                you will be able to add cars to your inventory. For each car you can add service entries with details about the maintenance 
                performed. <br/><br/> Remember to check back as service features are still growing. (Soon there will be a feature to upload 
                images of invoices for parts and/or labor).
              </p>
            </div>
            <div>
              <br/><br/><h4><b>Example Service History Dashboard:</b></h4><br/>
              <img src={ExampleDashboard} width="100%" style={{border: "2px solid blue"}} alt="Dashboard"/>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}