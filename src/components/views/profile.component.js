import React, { Component } from "react";
import { Redirect , Link} from 'react-router-dom';
import { connect } from "react-redux";





class Profile extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      showAddPatientButton: false,
      showAddChirurgienButton: false,
      showAddMedecinButton: false,
      showAddPersonnelButton: false,
      currentUser: undefined,
    };
    console.log(this.props.user)
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentuser: user,
        showAddPatientButton: user.roles.includes("ROLE_CHIRURGIEN"),
        showAddPersonnelButton: user.roles.includes("ROLE_CHIRURGIEN"),
        showAddMedecinButton: user.roles.includes("ROLE_CHIRURGIEN"),
        showAddChirurgienButton: user.roles.includes("ROLE_ADMIN"),
        
      });
    }
   
  }


  render() {

    const {showAddPatientButton} = this.state;
    const {showAddChirurgienButton} = this.state;
    const {showAddPersonnelButton} = this.state;
    const {showAddMedecinButton} = this.state;
     
     const { user: currentUser } = this.props;
     //const role = currentUser.roles ;
     
     
    if (!currentUser) {
      return <Redirect to="/login" />;
    }
    

    return (
    
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        {showAddPatientButton && (
                <span className="input-group-btn">
                <Link to="/register/patient" >Click to add patient</Link>
            </span>
              )}
        {showAddChirurgienButton && (
                <span className="input-group-btn">
                <Link to="/register/chirurgien" >Click to add chirurgien</Link> 
            </span>
              )}
              
               {showAddPersonnelButton && (
                <span className="input-group-btn">
                <Link to="/register/personnel" >Click to add personnel</Link>
            </span>
              )}
               {showAddMedecinButton && (
                <span className="input-group-btn">
                <Link to="/register/medecin" >Click to add medecin</Link>
            </span>
              )}
        
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

export default connect(mapStateToProps)(Profile);
