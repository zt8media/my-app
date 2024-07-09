import React, { Component } from 'react';
import './App.css';
import BasicInfo from './BasicInfo';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'John Doe',
        phone: '123-456-7890',
        dob: 'January 1, 1990'
      }
    };
  }

  render() {
    return (
      <div className="App">
        <h1>My Basic Information</h1>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}

export default App;

 

