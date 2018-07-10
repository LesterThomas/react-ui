import React, { Component } from 'react';

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Recharts from 'recharts';

var DroneControlStore = require('../../stores/droneControlStore');
var DroneControlActions = require('../../actions/droneControlActions');

var data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

class DroneControlPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      droneControl: DroneControlStore.getAllDroneControl()
    };
  }

  componentWillMount() {
    DroneControlStore.addChangeListener(this._onChange);
  }

  //Clean up when this component is unmounted
  componentWillUnmount() {
    DroneControlStore.removeChangeListener(this._onChange);
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this.timer, 1000);
  }

  timer() {
    // setState method is used to update the state
    DroneControlStore.updateDrone();
  }

  _onChange() {
    this.state = { droneControl: DroneControlStore.getAllDroneControl() };
  }

  render() {
    return (
      <div>
        <h1>Drone Control</h1>
        <ul>
          <li>Latitude: {this.state.droneControl.latitude}</li>
          <li>Longitude: {this.state.droneControl.longitude}</li>
          <li>Altitude: {this.state.droneControl.altitude}</li>
          <li>End</li>
        </ul>
        <p>The End</p>
      </div>
    );
  }
}

module.exports = DroneControlPage;
