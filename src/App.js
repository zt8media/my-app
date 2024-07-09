import React, { Component } from 'react';
import './App.css';
import BasicInfo from './BasicInfo';
import spongebob from './img/spongebob.png';
import patrick from './img/patrick.png';
import mrkrabs from './img/mr.krabs.png';
import sandy from './img/Sandy.png';
import bubblebass from './img/BubbleBass.png';
import background from './img/background.webp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: 'SpongeBob SquarePants', phone: '123-456-7890', dob: 'November 25, 1990', image: spongebob },
        { name: 'Patrick Star', phone: '987-654-3210', dob: 'February 2, 1992', image: patrick },
        { name: 'Sandy Cheeks', phone: '555-555-5555', dob: 'March 3, 1993', image: sandy },
        { name: 'Bubble Bass', phone: '111-222-3333', dob: 'October 9, 1977', image: bubblebass },
        { name: 'Mr. Krabs', phone: '444-555-6666', dob: 'September 1, 1942', image: mrkrabs }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Bikini Bottom Residences</h1>
        <div className="cards-container">
          {this.state.people.map((person, index) => (
            <BasicInfo key={index} person={person} />
          ))}
        </div>
      </div>
    );
  }
}


export default App;
