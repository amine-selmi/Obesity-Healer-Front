import React, { Component } from "react";
import { Router, Route, withRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppLayout from "../../layout/AppLayout";

import Home from "./home.component"
import liseUsers from "./liste-users"
import Profile from "./profile.component"
import BoardUser from "./board-user.component"
import BoardModerator from "./board-moderator.component"
import BoardAdmin from "./board-admin.component"

import { history } from '../../helpers/history';

import pageHome from "../pages/Home";


import Nav from "../shared/Navbar.component"





class App extends Component {
  render() {
    const { match } = this.props;

    return (

      <Router history={history}>
        
       
            <AppLayout/>
            
        
        
      
                <Switch>
                
                <Route path={`/home`} component={Home}/>
                <Route path={`/listUsers`} component={liseUsers}/>
                <Route path={`/profile`} component={Profile}/>
                <Route path={`/patient`} component={BoardUser}/>
                <Route path={`/chirurgien`} component={BoardModerator}/>
                <Route path={`/admin`} component={BoardAdmin}/>
                <Route path={`/homee`} component={pageHome}/>
                
                <Redirect  from={`/`} to={`/home`} />
                {/* <Redirect to="/error" /> */}
                
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

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);

// function mapStateToProps(state) {
//   const { user } = state.auth;
//   return {
//     user,
//   };
// }

// export default connect(mapStateToProps)(App);