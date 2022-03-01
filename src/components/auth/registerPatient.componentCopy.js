import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { registerPatientAction } from "../../actions/auth";

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
//import { makeStyles } from "@material-ui/core/styles";


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
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
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};



//  const useStyles = makeStyles((theme) => ({
//   button: {
//     marginRight: theme.spacing(1),
//   },
// }));

class RegisterTest extends Component {
  
  constructor(props) {
    super(props);
    // this.handleRegister = this.handleRegister.bind(this);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onChangeNom = this.onChangeNom.bind(this);
    // this.onChangePrenom = this.onChangePrenom.bind(this);
    // this.onChangeTaille = this.onChangeTaille.bind(this);
    // this.onChangePoids = this.onChangePoids.bind(this);
    // this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);


    this.state = {
      activeStep:"",
      skippedSteps:'',
      steps:[],
      nom: "",
      prenom: "",
      username: "",
      email: "",
      password: "",
      taille:"",
      poids:"",
      chirurgienUsername: this.props.user.username,
      successful: false,
    };

    console.log("user : "+this.props.user.roles)
  }
   getSteps() {
    return [
      "Basic information",
      "Contact Information",
      "Personal Information",
      "Payment",
    ];
  }

  getStepContent(props) {
    switch (this.props.step) {
      case 0:
        return (
          <>
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              name="firstName"
              value={this.state.username}
              onChange={this.onChangePrenom}
              validations={[required, vprenom]}
            />
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              name="lastName"
            />
            <TextField
              id="nick-name"
              label="Nick Name"
              variant="outlined"
              placeholder="Enter Your Nick Name"
              fullWidth
              margin="normal"
              name="nickName"
            />
          </>
        );
  
      case 1:
        return (
          <>
            <TextField
              id="email"
              label="E-mail"
              variant="outlined"
              placeholder="Enter Your E-mail Address"
              fullWidth
              margin="normal"
              name="emailAddress"
            />
            <TextField
              id="phone-number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Your Phone Number"
              fullWidth
              margin="normal"
              name="phoneNumber"
            />
            <TextField
              id="alternate-phone"
              label="Alternate Phone"
              variant="outlined"
              placeholder="Enter Your Alternate Phone"
              fullWidth
              margin="normal"
              name="alternatePhone"
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              id="address1"
              label="Address 1"
              variant="outlined"
              placeholder="Enter Your Address 1"
              fullWidth
              margin="normal"
              name="address1"
            />
            <TextField
              id="address2"
              label="Address 2"
              variant="outlined"
              placeholder="Enter Your Address 2"
              fullWidth
              margin="normal"
              name="address2"
            />
            <TextField
              id="country"
              label="Country"
              variant="outlined"
              placeholder="Enter Your Country Name"
              fullWidth
              margin="normal"
              name="country"
            />
          </>
        );
      case 3:
        return (
          <>
            <TextField
              id="cardNumber"
              label="Card Number"
              variant="outlined"
              placeholder="Enter Your Card Number"
              fullWidth
              margin="normal"
              name="cardNumber"
            />
            <TextField
              id="cardMonth"
              label="Card Month"
              variant="outlined"
              placeholder="Enter Your Card Month"
              fullWidth
              margin="normal"
              name="cardMonth"
            />
            <TextField
              id="cardYear"
              label="Card Year"
              variant="outlined"
              placeholder="Enter Your Card Year"
              fullWidth
              margin="normal"
              name="cardYear"
            />
          </>
        );
      default:
        return "unknown step";
    }
  }
  
  //  classes = useStyles();
   steps = this.getSteps();

   isStepOptional = (step) => {
    return step === 1 || step === 2;
  }

  isStepSkipped = (step) => {
    return this.state.skippedSteps.includes(step);
  }

  handleNext = () => {
    this.setState((state) => ({ 
      activeStep: state.activeStep + 1,
    }));
    console.log(this.state.activeStep);
   
    // var x = this.state.skippedSteps.filter((skipedItem) => skipedItem !== this.state.activeStep)
    // this.setState((state) => ({ 
    //   skippedSteps: x,
    // }));

    // this.setState({
    //   activeStep: this.state.activeStep + 1,
    //   skippedSteps: this.state.skippedSteps.filter((skipItem) => skipItem !== this.state.activeStep),
    // });
  }

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    }) }

  handleSkip = () => {
      if (!this.isStepSkipped(this.state.activeStep)) {
        this.setState({
          skippedSteps: this.state.activeStep,
          activeStep: this.state.activeStep + 1 ,
        })
      }
      this.setState({
        activeStep: this.state.activeStep + 1 ,
      })
    };

  // onChangeNom(e) {
  //   this.setState({
  //     nom: e.target.value,
  //   });
  // }

  onChangePrenom(e) {
    this.setState({
      prenom: e.target.value,
    });
  }

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value,
  //   });
  // }

  // onChangeEmail(e) {
  //   this.setState({
  //     email: e.target.value,
  //   });
  // }

  // onChangePassword(e) {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // }

  // onChangeTaille(e) {
  //   this.setState({
  //     taille: e.target.value,
  //   });
  // }

  // onChangePoids(e) {
  //   this.setState({
  //     poids: e.target.value,
  //   });
  // }

  // handleRegister(e) {
  //   e.preventDefault();

  //   this.setState({
  //     successful: false,
  //   });

      
  //   this.form.validateAll();
  
  //   if (this.checkBtn.context._errors.length === 0) {      
  //     this.props
  //       .dispatch(
  //         registerPatientAction(this.state.nom, this.state.prenom, this.state.username,
  //            this.state.email, this.state.password, this.state.taille, this.state.poids,
  //            this.state.chirurgienUsername)
  //       )
  //       .then(() => {
  //         this.setState({
  //           successful: true,
  //         });
  //       })
  //       .catch(() => {
  //         this.setState({
  //           successful: false,
  //         });
  //       });
  //   }
  // }


  
  

  render() {
    const { message } = this.props;
    //const { user } = this.props;
    // const { user: currentUser } = this.props;
    // const role = currentUser.roles ;

   // console.log(user)
    return (
      <div>
      <Stepper>
        {this.steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (this.isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (this.isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {this.state.activeStep === this.steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{this.getStepContent(this.state.activeStep)}</form>
          <Button
            disabled={this.state.activeStep === 0}
            onClick={this.handleBack}
          >
            back
          </Button>
          { (
            <Button             
              variant="contained"
              color="primary"
              onClick={this.handleSkip}
            >
              skip
            </Button>
          )}
          <Button           
            variant="contained"
            color="primary"
            onClick={this.handleNext}
          >
            {this.state.activeStep === this.steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>

    )
      
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

export default connect(mapStateToProps)(RegisterTest);
