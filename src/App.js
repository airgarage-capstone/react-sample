import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>AirGarage</h1>
        <Form></Form>
      </div>
    );
  }
}

export default App;
