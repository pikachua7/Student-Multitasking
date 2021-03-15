import React, { Component } from 'react'
import './App.css';

class CalButton extends Component {
    render() {
      return (
        <button
          className={"button " + this.props.class}
          id={this.props.id}
          onClick={this.props.onClick}
        >
          <p>{this.props.value}</p>
        </button>
      );
    }
}


export default CalButton