import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";
import { history } from '../../helpers/history';
// import AuthVerify from "./common/auth-verify";
import EventBus from "../../common/EventBus";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import logo from '../../images/logo.png';
import '../../App.css';

export class NavbarComponent extends Component {

    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            showRegisterPatient: false,
            currentUser: undefined,
        };

        history.listen((location) => {
            props.dispatch(clearMessage()); // clear message when changing location
        });
    }
    componentDidMount() {
        const user = this.props.user;
    
        if (user) {
          this.setState({
            currentUser: user,
            showModeratorBoard: user.roles.includes("ROLE_CHIRURGIEN"),
            showRegisterPatient: user.roles.includes("ROLE_CHIRURGIEN"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }
    
        EventBus.on("logout", () => {
          this.logOut();
        });
      }
    componentWillUnmount() {
        EventBus.remove("logout");
    }
    
    logOut() {
        this.props.dispatch(logout());
        this.setState({
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        });
    }

    render() {
        const { currentUser, showModeratorBoard, showAdminBoard , showRegisterPatient } = this.state;
        return (
            <div>
                <Navbar className="navbarco" collapseOnSelect expand="lg" variant="light" style={{width: "100%",
            position: "fixed", backgroundColor: "#f8f9faf2", zIndex: "5",borderBottom: "solid", borderBottomRightRadius: "15%",
            borderBottomLeftRadius: "15%", borderColor: "#4dc5f996"}}>
                <Container style={{maxWidth: "100%", minWidth: "100%", margin: "-5px 0 0 25px", height: "75px"}}>
                <Navbar.Brand href="#home">
                <div className="container" style={{flexDirection:"column", width: "min-content"}}>
                                    <img src={logo} alt="logo" className="logoNavbar"/>
                                    <p style={{fontFamily: "'Cabin','Helvetica Neue',Helvetica,Arial,sans-serif",margin:"0px"}}>ObesityHealer</p>
                                </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="col-md-12">
                        <div className="row">
                        <div className="col col-md-9">
                    <Nav className="me-auto" style={{justifyContent: "center"}}>
                    <Nav.Link href="/home">HOME</Nav.Link>
                    {showModeratorBoard && (
                            <Nav.Link href="/chirurgien">Chirurgien Board</Nav.Link>)}

                        {showRegisterPatient && (
                            <Nav.Link href="/listUsers">liste patients</Nav.Link>)}
                            
                        {showAdminBoard && (
                        <Nav.Link href="/admin">Admin Board</Nav.Link>)}
                        
                        {currentUser && (
                        <Nav.Link href="/patient">Patient</Nav.Link>)}
                            
                            
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    </div>
                    <div className="col-md-3">
                    <Nav style={{justifyContent: "end"}}>
                        {currentUser ? (
                            <div className="row">
                            <Nav.Link href="/profile" style={{marginRight: "5px"}}>{currentUser.username}</Nav.Link>
                            <Nav.Link href="/login" onClick={this.logOut}>
                            LogOut
                            </Nav.Link>
                            </div>
                    ) : (
                        <div>
                        <Nav.Link href="/login">Login</Nav.Link>
                        
                        </div>
                        )}
                        </Nav>
                        </div>
                        </div>
                        </div>
                </Navbar.Collapse>
                </Container>
                </Navbar>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,
    };
  }

export default connect(mapStateToProps)(NavbarComponent)
