import React, { Component } from "react";

import UserService from "../../services/user.service";
// import personimage from '../images/person1.png';
import "../../App.css"




export default class Homee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
    <div >
      <p>rdfghjklm</p>
    </div>
    );
  }
}
