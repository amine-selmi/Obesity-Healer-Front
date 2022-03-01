import React, { Component } from "react";

import UserService from "../../services/user.service";
// import personimage from '../images/person1.png';
import "../../App.css"
import NavbarComponent from "../shared/Navbar.component"
import LiseUsers from "./liste-users";



export default class Home extends Component {
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
      
    </div>
    );
  }
}
