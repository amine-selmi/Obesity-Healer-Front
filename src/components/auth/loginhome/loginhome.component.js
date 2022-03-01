import React , { Component } from "react";

import classes from "./loginhome.module.css";
import LogImage from '../../../images/login.svg';
import HomeImage from "../../../images/home.svg"; 
import LogoImage from "../../../images/person1.png";
import UserImage from "../../../images/user-solid.svg"
import LockImage from "../../../images/lock-solid.svg"
import RegisterImage from "../../../images/register.svg"

import { Redirect } from 'react-router-dom';

import { connect } from "react-redux";
import { login } from "../../../actions/auth";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Loginhome extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.signUpButton = this.signUpButton.bind(this);
    this.signInButton = this.signInButton.bind(this);

    this.state = {
      SignUP: false,
      username: "",
      password: "",
      loading: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  
  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          history.push("/");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  signUpButton(e) {
    this.setState({
      SignUP: true,
    });
  }
  signInButton(e) {
    this.setState({
      SignUP: false,
    });
  }
  render() {

    const { isLoggedIn, message } = this.props;

    // if (isLoggedIn) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div className={`${classes.container} ${this.state.SignUP ? classes['sign-up-mode'] : ""}`}>
        <div className={classes['forms-container']}>
          <div className={classes['signin-signup']}>
            <div className={classes["sign-in-form"]}>
              <img src={LogoImage} alt="" />
              <h2 className={classes["title-logo"]}>__ ObesityHealer __</h2>
            </div>
            <Form className={classes['sign-up-form']} 
                  onSubmit={this.handleLogin}
                  ref={(c) => {
                    this.form = c;}}>
              <h2 className={classes.title}>Connectez-vous</h2>
              <div className={classes['input-field']}>
              <img src={UserImage} alt=""></img>
                <input
                  type="text"
                  name="username"
                  placeholder="Nom d'utilisateur"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  validations={[required]}
                />
                {/* <input type="text" placeholder="Nom d'utilisateur" /> */}
              </div>
              <div className={classes['input-field']}>
                <img src={LockImage} alt=""></img>
                <input
                type="password"
                placeholder="Mot de passe"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
                {/* <input type="password" placeholder="Mot de passe" /> */}
              </div>
              <div>
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
              
              {/* <input type="submit" className={classes.btn} value="Connexion" /> */}
              </div>
              {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
            </Form>
          </div>
        </div>
      
        <div className={classes["panels-container"]}>
          <div className={[classes.panel, classes['left-panel']].join(' ')}>
            <div className={classes.content}>
              <h3> Pas encore connecter ?</h3>
              <p>
                Veuillez vous connecter tout d'abord pour accéder aux différentes 
                fonctionnalités que notre platforme offre.
              </p>
              <button className={[classes.btn, classes.transparent].join(' ') } id={classes['sign-up-btn']} onClick={this.signUpButton}>
                Se connecter
              </button>
            </div>
            <img src={LogImage} className={classes.image} alt="" />
          </div>
          <div className={[classes.panel, classes['right-panel']].join(' ')}>
            <div className={classes.content}>
              <h3>Retourner en arrière?</h3>
              <p>
                  Retourner à la page précédante en cliquant sur le
                  boutton<br/> au-dessous.               

              </p>
              <button className={[classes.btn, classes.transparent].join(' ')} id={classes["sign-in-btn"]} onClick={this.signInButton}>
                Retourner
              </button>
            </div>
            <img src={RegisterImage} className={classes.image} alt="" />
          </div>
      </div>
      </div>

    );
  }
}
function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Loginhome);
