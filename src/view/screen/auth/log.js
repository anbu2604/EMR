import React, { Component } from 'react'
import { instance } from '../../../utils/axios'
import { Navigate } from "react-router-dom";
import "./log.css";

export class login extends Component {
  state = { user: null, error: null };
  constructor(){
    super()
    this.state = {
      username: "9940683837",
      password: "raja1234"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name] : e.target.value });
 }
  async handlesubmit(){
    localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI3OWYzZWQ4MC1kZTgwLTRlNTMtOTkxMi0yMGEzYjgzZjQ3MjYiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2dyb3Vwc2lkIjoiNjEwNTliMzUtMDMwMC00NmVhLTgwNjAtNmY1ZmU5MGY5NWUyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbG9jYWxpdHkiOiJBdXN0cmFsaWEvQWRlbGFpZGUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaGFydW5wcmFzYWQrNkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJFTVAxMDMyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9wcmltYXJ5c2lkIjoiZGZmMmI3ZmQtYjVhOC00NjU5LTg3YTEtNDc1MWFiOTE4ZjM2IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMDgvMDMvMjAyMiAwOTowODowNiIsIm5iZiI6MTY1OTUxNDA4NiwiZXhwIjoxNjU5NTE3Njg2LCJpc3MiOiJodHRwczovL3BvcnRhbC5ienBheS5jbyIsImF1ZCI6Imh0dHBzOi8vcG9ydGFsLmJ6cGF5LmNvIn0.QZsoktt7h5U5fpkr3-B7V9deE8qtYjN-FDDtTPnTM7k')
      let user ='dd';
      this.setState({ user });
    try{
      const data ={
        "username": this.state.username,
        "password": this.state.password
      }
      // let user = await instance.post('/login',data)
      // console.log("datas",user.data.accessToken)
      // localStorage.setItem('accessToken',user.data.accessToken)
      // localStorage.setItem('refreshToken',user.data.refreshToken)
      // localStorage.setItem('token',user.data.accessToken)
      // this.setState({ user });
    }catch(err){
      const error = err.response.data.errors;
      console.log("error",error)
      localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI3OWYzZWQ4MC1kZTgwLTRlNTMtOTkxMi0yMGEzYjgzZjQ3MjYiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2dyb3Vwc2lkIjoiNjEwNTliMzUtMDMwMC00NmVhLTgwNjAtNmY1ZmU5MGY5NWUyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbG9jYWxpdHkiOiJBdXN0cmFsaWEvQWRlbGFpZGUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaGFydW5wcmFzYWQrNkBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhdG9yIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJFTVAxMDMyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9wcmltYXJ5c2lkIjoiZGZmMmI3ZmQtYjVhOC00NjU5LTg3YTEtNDc1MWFiOTE4ZjM2IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMDgvMDMvMjAyMiAwOTowODowNiIsIm5iZiI6MTY1OTUxNDA4NiwiZXhwIjoxNjU5NTE3Njg2LCJpc3MiOiJodHRwczovL3BvcnRhbC5ienBheS5jbyIsImF1ZCI6Imh0dHBzOi8vcG9ydGFsLmJ6cGF5LmNvIn0.QZsoktt7h5U5fpkr3-B7V9deE8qtYjN-FDDtTPnTM7k')
      let user ='dd';
      this.setState({ user });
      // this.setState({ error });
    }
   
  }
  render() {
    let { user, error } = this.state;
    return (
      <div className='login text-center'>
        {error && <div className="mb-2">
                <div className="alert alert-danger fade show" role="alert">
                  {error}
                </div>
              </div>}
            {user && (
              <Navigate to="/dashboard" replace={true} />
            )}
        <form className=' formlg m-5'>
          <div className='mb-4'>
            <img src="assets/images/logo.svg"/>
          </div>
          <div className='mb-4'>
            <label >Welcome to DiabWellness.ai</label>
          </div>
          <div className='mb-4'>
            <h3 className='fw-bold text-dark'>Sign in</h3>
          </div>
  <div class="mb-4 ">
    <label for="exampleInputEmail1" class="form-label d-flex">Email or username</label>
                       <input type="text" onChange={this.handleChange} value={this.state.username} name='username' id="signup_email" className="form-control form-control-lg" placeholder="username or email" />
  </div>
  <div class="mb-5">
    <label for="exampleInputPassword1" class="form-label d-flex">Password</label>
                    <input type="password" onChange={this.handleChange} value={this.state.password} name='password' id="signup_password" className="form-control form-control-lg" placeholder="password" />
  </div>
  
  <div  class="button btn-primary col-lg-12 mb-4" onClick={this.handlesubmit}>Submit</div>
  <div class="mb-2">
    <label for="exampleInputPassword1" class="form-label text-primary">Forgot Password</label>
  </div>
</form>
      </div>



    )
  }
}

export default login
