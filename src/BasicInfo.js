import React, { Component } from 'react';
import './App.css'; 

class BasicInfo extends Component {
  render() {
    const { name, phone, dob, image } = this.props.person;
    return (
      <div className="basic-info">
        <img src={image} alt={name} className="card-image" />
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Phone Number:</strong> {phone}</p>
        <p><strong>Date of Birth:</strong> {dob}</p>
      </div>
    );
  }
}

export default BasicInfo;
