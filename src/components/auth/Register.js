import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./../layout/Navbar";
// const validateForm = (errors) => {
//   let valid = true;
//   Object.values(errors).forEach(
//     (val) => val.length > 0 && (valid = false)
//   );
//   return valid;
// }
var validEmailRe = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Register extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      email: "",
      password: "",
      errors: {
        Username: "",
        email: "",
        password: ""
      },
      disableSubmit: true
    };
  }
  validateUsername = (userName) => {
    return userName && userName.length >= 5; 
  }
  onChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    const newErros = {...errors};
    switch (name) {
      case "Username":
        newErros.Username = this.validateUsername(value) ? "" : "Full Name must be 5 characters long!";
        break;
      case "email":
        // var validEmailRegex  = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$');
        newErros.email = validEmailRe.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        newErros.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({
      errors: newErros,
      [name]: value,
      disableSubmit: this.validateInputs(newErros)
    }, () => {
      console.log(this.state);
    });
  };
  validateInputs = (errorsParam) => {
    let errors = this.state.errors;
    const {Username, email, password} = this.state;
    if(errorsParam){
      errors = errorsParam;
    }
    const hasErrors = Object.keys(errors).filter(errorKey => errors[errorKey].length > 0).length > 0;
    if(!(Username && password && email) || hasErrors) {
      return true;
    }
    else {
      return false;
    }
  }
  goToHome = () => this.props.history.push('/card')
  onSubmit = async e => {
    e.preventDefault();
    // const this
    if(this.validateInputs()){
      return;
    }
    // validation if we have every input then only proceed or else return.
    const newuser = {
      Username: this.state.Username,
      email: this.state.email,
      password: this.state.password,
      // errors: this.state.errors
    };
    
     // console.log(user);
    const response = await axios
      .post("http://localhost:8000/register", newuser)
    if(response.errors === null){
      this.props.history.push('/card');
    }
    else{
      this.goToHome()
    }

    // .catch(function (error) {
    //    console.log(error);
    // });

    console.log(newuser);
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBar />
        <div className="container" style={{ marginLeft: "30%" }}>
          <div style={{ marginTop: "4rem" }} className="row" id="user-login">
            <div className="col s6 z-depth-6 card-panel">
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  <b>Register</b>
                </h4>
                <p className="grey-text text-darken-1">
                  Already have an account?{" "}
                  <Link to="/login" style={{ color: "#26a69a" }}>
                    Log in
                  </Link>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12 validate">
                  <i className="mdi-social-person-outline prefix">
                    {" "}
                    <i className="material-icons">person</i>
                  </i>
                  <input
                    onChange={this.onChange}
                    value={this.state.Username}
                    name="Username"
                    type="text"
                    class="validate"
                    required=""
                    aria-required="true"
                  />
                  <div style={{ color: "red" }}>
                    {errors.Username}
                  </div>
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s12">
                  <i className="mdi-social-person-outline prefix">
                    {" "}
                    <i className="material-icons">email</i>
                  </i>
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    name="email"
                    type="email"
                    class="validate"
                    required=""
                    aria-required="true"
                  />
                  <div style={{ color: "red" }}>{errors.email}</div>
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s12">
                  <i class="mdi-social-person-outline prefix">
                    {" "}
                    <i class="material-icons">enhanced_encryption</i>
                  </i>
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    name="password"
                    type="password"
                    class="validate"
                    required=""
                    aria-required="true"
                  />
                  <div style={{ color: "red" }}>
                    {this.state.errors.password}
                  </div>
                  <label htmlFor="password">Password</label>
                </div>
                <div className="col s12" style={{ paddingLeft: "70.250px" }}>
                  <button
                    style={{
                      backgroundColor: "#87CEEB",
                      width: "100px",
                      height: "50px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                      marginBottom: "1rem"
                    }}
                    disabled={this.state.disableSubmit}
                    type="submit"
                    className="waves-effect waves-light btn">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
