// import logo from './logo.svg';
// import { Fragment } from "react";
// import './App.css';
import React, { Component } from "react";
import Header from "./Header";
import './ShowSubscribers.css';
import './common/common.css';

class ShowSubscribers extends Component {

  render(){
  return (
    <div>
        <Header heading="Phone Directory"></Header>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.props.subscriberList.map(sub =>{
              return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                  <button className="custom-btn delt-btn">Delete</button>
                </span>
              </div>
            })
          }
        </div>
      </div>
  );
}
}

export default ShowSubscribers;
