import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/*import Login from "./components/login.component";*/
import Register from "../src/components/auth/register.component";
import RegisterChirurgien from "../src/components/auth/registerChirurgien.component"
import RegisterPatient from "../src/components/auth/registerPatient.component"
import RegisterPersonnel from "../src/components/auth/registerPersonnel.component"
import RegisterMedecin from "../src/components/auth/registerMedecin.component"
import RegisterTest from "./components/auth/registerPatient.componentCopy"

import app from "../src/components/views";

import { history } from './helpers/history';
import Loginhome from './components/auth/loginhome/loginhome.component'
import { faHandMiddleFinger } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from 'react-router-dom';
import layout from "./layout/AppLayout"
import Nav from "./components/shared/Navbar.component"

import LinearStepper from "./components/auth/LinearStepper";

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';








class App extends Component {

  render() {
    const { user } = this.props;

      return (
      //  <Router history={history}>
      //     <Loginhome/>
      //     <NavbarComponent/> 
      //  </Router>

      <Router history={history}>

             {/* <CssBaseline />
              <Container component={Box} p={4}>
                <Paper component={Box} p={3}>
                  <LinearStepper />
                </Paper>
              </Container> */}

              {/* <CssBaseline />
              <Container component={Box} p={4}>
                <Paper component={Box} p={3}>
                  <RegisterTest />
                </Paper>
              </Container> */}
        
        <Switch>
              
              <Route exact path="/login" component={Loginhome} />

              <Route exact path="/register" component={Register} />
              <Route exact path="/register/chirurgien" component={RegisterChirurgien} />
              <Route exact path="/register/patient" component={RegisterPatient} />
              <Route exact path="/register/personnel" component={RegisterPersonnel} />
              <Route exact path="/register/medecin" component={RegisterMedecin} />
              //<Route exact path="/register/test" component={RegisterTest} />

 
       
              {user ? (<Route path="/" component={app} /> ) : (<Redirect to="/login" />)}
              {/* <Redirect to='/login'/> */}
            </Switch>
            
      </Router>
    );

    

  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);

