import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { registerPersonnelAction } from "../../actions/auth";


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const vnom = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The name must be between 3 and 20 characters.
      </div>
    );
  }
};
const vprenom = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The prenom must be between 3 and 20 characters.
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vdiscipline = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The discipline must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {
  
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangePrenom = this.onChangePrenom.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeDiscipline = this.onChangeDiscipline.bind(this);

    this.state = {
      nom: "",
      prenom: "",
      username: "",
      email: "",
      password: "",
      discipline:"",
      successful: false,
    };

    console.log("user : "+this.props.user.roles)

   
  }
  onChangeNom(e) {
    this.setState({
      nom: e.target.value,
    });
  }

  onChangePrenom(e) {
    this.setState({
      prenom: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeDiscipline(e) {
    this.setState({
      discipline: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

      
    this.form.validateAll();
  
    if (this.checkBtn.context._errors.length === 0) {      
      this.props
        .dispatch(
          registerPersonnelAction(this.state.nom, this.state.prenom, this.state.username, this.state.email, this.state.password
            , this.state.discipline)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;
    //const { user } = this.props;
    // const { user: currentUser } = this.props;
    // const role = currentUser.roles ;

   // console.log(user)
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="nom">nom</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="nom"
                    value={this.state.nom}
                    onChange={this.onChangeNom}
                    validations={[required, vnom]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="prenom">Prenom</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="prenom"
                    value={this.state.username}
                    onChange={this.onChangePrenom}
                    validations={[required, vprenom]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="discipline">Discipline</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="discipline"
                    value={this.state.discipline}
                    onChange={this.onChangeDiscipline}
                    validations={[required, vdiscipline]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group">
                <div className={ this.state.successful ? "alert alert-success" : "alert alert-danger" } role="alert">
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
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  const { user } = state.auth;
  return {
    message,
    user,
  };
}

export default connect(mapStateToProps)(Register);
