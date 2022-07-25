import React, { Component } from 'react'
import { instance } from '../../../../utils/axios'
import { Navigate } from "react-router-dom";


export class login extends Component {
  state = { user: null, error: null };
  constructor(){
    super()
    this.state = {
      phoneNumber: "9940683837",
      password: "raja1234"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
 }
  async handlesubmit(){
    try{
      let user = await instance.post('/login',{
        "phoneNumber": this.state.phoneNumber,
        "password": this.state.password
    })
    console.log("datas",user)
    this.setState({ user });
    }catch(error){
      console.log("error",error)
      this.setState({ error });
    }
   
  }
  render() {
    let { user, error } = this.state;
    return (
      <div id="ihealth-layout" className="theme-tradewind">
      {/* main body area */}
      <div className="main p-2 py-3 p-xl-5 ">
        {/* Body: Body */}
        <div className="body d-flex p-0 p-xl-5">
          <div className="container-xxl">
            <div className="row g-0">
              <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                <div style={{maxWidth: '25rem'}}>
                  <div className="text-center mb-5">
                    <i className="icofont-heart-beat secondary-color" style={{fontSize: '90px'}} />
                  </div>
                  <div className="mb-5">
                    <h2 className="color-900 text-center">EMR, We aim to make your life better</h2>
                  </div>
                  {/* Image block */}
                  <div className>
                    <img src="../assets/images/login-img.svg" alt="login-img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                <div className="w-100 p-3 p-md-5 card border-0 bg-dark text-light" style={{maxWidth: '32rem'}}>
                  {/* Form */}
                  {error && <div className="mb-2">
                      <div className="alert alert-danger fade show" role="alert">
                        {error.message}
                      </div>
                    </div>}
                  {user && (
                    <Navigate to="/dashboard" replace={true} />
                  )}
                  <form className="row g-1 p-3 p-md-4" >
                    <div className="col-12 text-center mb-5">
                      <h1>Sign in</h1>
                      <span>Free access to our dashboard.</span>
                    </div>
               
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label">Email address</label>
                        <input type="text" onChange={this.handleChange} value={this.state.phoneNumber} name='phoneNumber' id="signup_email" className="form-control form-control-lg" placeholder="7708093833" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-2">
                        <div className="form-label">
                          <span className="d-flex justify-content-between align-items-center">
                            Password
                            <a href="auth-password-reset.html">Forgot Password?</a>
                          </span>
                        </div>
                        <input type="password" onChange={this.handleChange} value={this.state.password} name='password' id="signup_password" className="form-control form-control-lg" placeholder="***************" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-12 text-center mt-4" onClick={this.handlesubmit}>
                      <a className="btn btn-lg btn-block btn-light lift text-uppercase" atl="signin">SIGN IN</a>
                    </div>
                   
                  </form>
                  {/* End Form */}
                </div>
              </div>
            </div> {/* End Row */}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default login
