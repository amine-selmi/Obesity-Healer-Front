import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter} from "react-router-dom";

import TopNav from "../components/shared/Navbar.component";
import Sidebar from "../components/shared/Sidebar.component";
import ListePatients from "../components/views/liste-users";
// import Sidebar from "../containers/navs/Sidebar";
class AppLayout extends Component {
  render() {
    const { Component } = this.props;
    return (
      
      <div id="app-container" style={{paddingBottom : "115px"}}>
        <TopNav history={this.props.history}  />
        <Sidebar />
      </div>
      
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
const mapActionToProps={}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(AppLayout));

// function mapStateToProps(state) {
//   const { user } = state.auth;
//   return {
//     user,
//   };
// }

// export default connect(mapStateToProps)(AppLayout);