import React, { Component } from 'react'
import Sidebar from '../../components/sidebar';
import Admin from '../../components/admin';
import Swal from 'sweetalert2';
import { instance } from '../../../utils/axios';

export class register extends Component {
    state = { user: null, error: null };
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
      }
      handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
     }
     async handlesubmit(){
        try{
          let user = await instance.post('/register',{
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "phoneNumber": this.state.phoneNumber,
            "password": this.state.password,
            "confirmPassword": this.state.confirmPassword
        })
        console.log("datas",user)
        this.setState({
            firstName: '', 
            lastName: '', 
            email:'', 
            phoneNumber:'', 
            password:'',
            confirmPassword:'',
            success: true
        })
        Swal.fire('Thanks!', 'Registration has been completed', 'success');
        }catch(error){
          console.log("error",error)
          this.setState({ error });
        }
       
      }
  render() {
    let { user, error } = this.state;
    return (
      <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className='col-lg-9'>
         <Admin></Admin>
      <div className="col-lg-7"> 
        
          {/* Body: Body */}
          <div className="body d-flex py-3">
            <div className="container-xxl">
              <div className="row align-items-center">
                <div className="border-0 mb-4">
                  <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                    <h3 className="fw-bold mb-0">Register</h3>
                  </div>
                </div>
              </div> {/* Row end  */}
              <div className="row mb-3">
                <div className="col-sm-12">
                {error && <div className="mb-2">
                      <div className="alert alert-danger fade show" role="alert">
                        {error.message}
                      </div>
                    </div>}
                  <div className="card mb-3">
                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                      <h6 className="mb-0 fw-bold "> Basic Information</h6>
                    </div>
                    <div className="card-body">
                      <form >
                        <div className="row g-3 align-items-center">
                          
                          <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.firstName} name="firstName" id="firstName" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.lastName} name="lastName" id="lastName" />
                          </div>
                          
                          <div className="col-md-6">
                            <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" onChange={this.handleChange} value={this.state.phoneNumber} name="phoneNumber" id="phoneNumber" />
                          </div>
                          
                          <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" onChange={this.handleChange} value={this.state.email} name="email" id="email" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={this.handleChange} value={this.state.password} name="password" id="password" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="confirmPassword" className="form-label">confirm Password</label>
                            <input type="password" name="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword} className="form-control" id="confirmPassword" />
                          </div>
                          
                        </div>
                        <center>
                        <div className="col-12 text-center mt-4" onClick={this.handlesubmit}>
                      <a className="btn btn-primary lift" atl="signin">Submit</a>
                    </div>
                            {/* <button type="submit" onClick={this.handlesubmit} className="btn btn-primary mt-4">Submit</button> */}
                        </center>
                      </form>
                    </div>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
         </div>
        
         </div>
               </div>
    )
  }
}

export default register;
