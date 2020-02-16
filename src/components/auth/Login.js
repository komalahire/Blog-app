import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import NavBar from './../layout/Navbar';

var validEmailRe = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: ""
      }
    };
  }
onChange = e => {
  const { name, value } = e.target;
  let errors = this.state.errors;

  switch (name) {
    
    case "email":
      // var validEmailRegex  = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$');
      errors.email = validEmailRe.test(value) ? "" : "Email is not valid!";
      break;
    case "password":
      errors.password =
        value.length < 8 ? "Password must be 8 characters long!" : "";
      break;
    default:
      break;
  }
  this.setState({ errors, [name]: value }, () => {
    console.log(errors.Username);
  });
  };
onSubmit = e => {
    e.preventDefault();
    const user={
      email: this.state.email,
      password: this.state.password
    }
    console.log(user)
//     axios.post()
// const userData = {
//       email: this.state.email,
//       password: this.state.password
axios.get('http://localhost:8000/login', {
  params:{
    email: this.state.email,
    password: this.state.password
  }

})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
// if(data.error===null){
//   return<Redirect to="/"/>
// }
    };

render() {
    const { errors } = this.state;
return (
  <div>
    <NavBar/>
      <div className="container" style = {{marginLeft:'30%'}}>
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s6 z-depth-6 card-panel">
            {/* <Link to="/" className="btn-flat waves-effect">
              <i className="large material-icons" style = {{color:' #26a69a'}}>keyboard_backspace</i>
            </Link> */}
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> 
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register" style = {{color:'#26a69a'}}>Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}  className="center-align">
              <div className="input-field col s12">
              <i className ="mdi-social-person-outline prefix"> <i class="material-icons">email
</i>
</i>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
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
              <i className="mdi-social-person-outline prefix"> <i class="material-icons">enhanced_encryption

</i></i>
            
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
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
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    backgroundColor: '#87CEEB',
                    width: "410px",
                    height:'50px',
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom:'1rem'
                  }}
                  type="submit"
                  className="  btn btn-large waves-effect waves-light hoverable light-blue accent-3 " 
                >
                  Log in
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
export default Login;