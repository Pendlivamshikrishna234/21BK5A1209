// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const TrainSchedule = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios
      .get('/api/trains')
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure</th>
            <th>Arrival</th>
          </tr>
        </thead>
        <tbody>
          {trains.map(train => (
            <tr key={train.id}>
              <td>{train.trainNumber}</td>
              <td>{moment(train.departureTime).format('LT')}</td>
              <td>{moment(train.arrivalTime).format('LT')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={TrainSchedule} />
        </Switch>
      </div>
    </Router>
  );
};

export defaultApp
