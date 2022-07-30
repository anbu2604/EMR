import React, { Component } from "react";
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";
import { instance } from '../../../utils/axios';
import Swal from 'sweetalert2';
import { Navigate } from "react-router-dom";

export class Add_role extends Component {

  state = { user: null, error: null };
    constructor(){
        super()
        this.state = {
            name: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
      }
      handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
     }
     async handlesubmit(){
        try{
          const config ={
            headers : {
              Authorization: 'Bearer ' + localStorage.getItem('accessToken') 
            }
        }
          const payload ={
            "name": this.state.name
          }
          let user = await instance.post('/role',payload, config)
        console.log("datas",user)
        
        this.setState({
            name: '', 
        })
        Swal.fire('Thanks!', 'Role has been added', 'success');
        Swal.fire({
          icon: 'success',
          title: 'Add Role?',
          text: 'Are you sure you want to Add?',
          showCancelButton: true,
          confirmButtonText: 'Save',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.isConfirmed) {
            <Navigate to="/role_master" replace={true} />
          }
        });
        }catch(err){
          const error = err.response.data.errors;
          console.log("errors",error)
          this.setState({ error });
        }
       
      }
      render() {
        let { user, error } = this.state;
        console.log("errors222",error)
        return (
    <div className="row d-flex">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-7">
      {error && <div className="mb-2">
                      <div className="alert alert-danger fade show" role="alert">
                        {error}
                      </div>
                    </div>}
      <div className="body d-flex py-3">
            <div className="container-xxl">
              <div className="row align-items-center">
                <div className="border-0 mb-4">
                  <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                    <h3 className="fw-bold mb-0 col-lg-10">Add Role Master</h3>
                   
                  </div>
                  
                </div>
              </div>{" "}
              {/* Row end  */}
              <div className="row ">
                <div className="col-sm-12">
                  <div className="card mb-3">
                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    </div>
                    <div className="row text-center font-weight-bold">
                    <div className="container">
                      <labe className="col-3 p-2">  Role Name</labe>
                      <input type="text" onChange={this.handleChange} value={this.state.name} name="name" id="name" className="col-3 p-1 m-1 mb-3" />
                    </div>
                   <div className="container">
                      <button type="button" onClick={this.handlesubmit} class="btn btn-success text-center col-1 p-1 m-1">Submit</button>
                      <button type="button" class="btn btn-danger text-center col-1 p-1 m-1">Cancel</button>
                   </div>
                  
                   </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      <div className="col-lg-2">
  <Admin></Admin>
</div>
</div>

)
}
}

export default Add_role;
