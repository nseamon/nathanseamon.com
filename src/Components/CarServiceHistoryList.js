import React, {Component} from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CustomNavbar from './CustomNavbar.js'
import Login from './Login.js'
import './CarServiceHistory.css'

export default class HistoryList extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      make: "",
      model: "",
      year: 0,
    };
   
  }
  
  componentDidMount() {
    this.setState({
        entries: [{
          "car_id": 6985604,
          "service": "Oil change",
          "mileage": 80000,
          "date": "2018-11-11"
        },
        {
          "car_id": 6985604,
          "service": "Oil change and air filter" ,
          "mileage": 85000,
          "date": "2019-11-11"
        },],
        make: "Ferrari",
        model: "F12",
        year: 2017,
      })
    };

  render() {
    
    if (Login.logged_in) {
      const historyEntries = this.state.entries.map((entry) => (
        <Entry
          car_id={entry.car_id}
          service={entry.service}
          mileage={entry.mileage}
          date={entry.date}
        />
      ));
      return (
        <div align="center">
          <CustomNavbar></CustomNavbar>
          <Jumbotron>
            <div>
              <h1>Service History </h1>
              <h3>{this.state.make} {this.state.model} ({this.state.year})</h3>
            </div>
            <div id='entries' class='Entry-list'>
              {historyEntries}
            </div>
          </Jumbotron>
        </div>
      );
    }  else {
      return (
        <div align="center">
          <CustomNavbar></CustomNavbar>
          <Login></Login>
        </div>
      );
    }
  };
}

class Entry extends Component {

  render() {
    return (
      <ul>
        <Card style={{ width: '30vw'}}  align="left" border="primary">
            <Card.Header>
              {this.props.date}
            </Card.Header> 
            <Card.Body padding-left="0px">    
              <Card.Title>
                {this.props.mileage} miles
              </Card.Title>
              <Card.Text padding-left="15px">
                {this.props.service}
              </Card.Text>
          </Card.Body>
        </Card>
      </ul>

  )};
}
