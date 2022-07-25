import React, { Component } from "react";
import Admin from "../../../components/admin";
import Sidebar from "../../../components/sidebar";


function Permissions() {
  return (
    <div className="row">
    <div className="col-lg-3">
      <Sidebar></Sidebar>
    </div>
    <div className="col-lg-9">
  <Admin></Admin>
    <div className="col-lg-12">
     
          {/* Body: Body */}

          <div className="body d-flex py-3">
            <div className="container-xxl">
              <div className="row align-items-center">
                <div className="border-0 mb-4">
                  <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                    <h3 className="fw-bold mb-0">Access privilege</h3>
                  </div>
                </div>
              </div>{" "}
              {/* Row end  */}
              <div className="row mb-3">
                <div className="col-sm-12">
                  <div className="card mb-3">
                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                      <h6 className="mb-0 fw-bold "></h6>
                    </div>
                    <div className="row">
                    <div className="col-lg-2 col-md-1 col-sm-12 offset-lg-1 font-weight-bold" style={{marginTop: "7px"}}>
                        User Role
                    </div>
                    <div className="col-md-4">
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Select</option>
                              <option value={1}>Admin</option>
                              <option value={2}>Super Admin</option>
                              <option value={3}>Doctor</option>
                              <option value={4}>Patient</option>
                              <option value={5}>Physician</option>
                              <option value={6}>Clinician</option>
                              <option value={7}>Accountant</option>

                            </select>
                          </div>
                          <div className="col-2">
                          <button type="button" class="btn btn-secondary btn-sm  ">Select All</button>
                          </div>
                          <div className="col-2">
                          <button type="button" class="btn btn-secondary btn-sm  ">Unselect All</button>
                          </div>

                    </div>
                    <div className="card-body">
                      <form  className="">
                        <table class=" table table-bordered border border-2">
                          <thead>
                            <tr className="table-active">
                              <th scope="col-2">Screen Name</th>
                              <th scope="col-9 text-center">Permissions</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Dashboard</th>
                              <td className="row"><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label " for="customCheck1">Add</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Edit</label>
</div><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Delete</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">View</label>
</div>
</td>
                            </tr>
                            <tr>
                            <th scope="row">Doctor List</th>
                              <td className="row"><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label " for="customCheck1">Add</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Edit</label>
</div><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Delete</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">View</label>
</div>
</td>
                            </tr>
                            <tr>
                            <th scope="row">Doctor Profile</th>
                              <td className="row"><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label " for="customCheck1">Add</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Edit</label>
</div><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Delete</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">View</label>
</div>
</td>
                            </tr>
                            <tr>
                            <th scope="row"> Appointments</th>
                              <td className="row"><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label " for="customCheck1">Add</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Edit</label>
</div><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Delete</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">View</label>
</div>
</td>
                            </tr>
                            <tr>
                            <th scope="row">Patient List</th>
                              <td className="row"><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label " for="customCheck1">Add</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Edit</label>
</div><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Delete</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">View</label>
</div>
</td>
                            </tr>
                            <tr>
                            <th scope="row">Patient Profile</th>
                              <td className="row"><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label " for="customCheck1">Add</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Edit</label>
</div><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Delete</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">View</label>
</div>
</td>
                            </tr>
                           
                            <tr>
                            <th scope="row">Patient Invoices</th>
                              <td className="row"><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label " for="customCheck1">Add</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Edit</label>
</div><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Delete</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">View</label>
</div>
</td>
                            </tr>
                            <tr>
                            <th scope="row"> Schedule</th>
                              <td className="row"><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label " for="customCheck1">Add</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Edit</label>
</div><div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">Delete</label>
</div>
<div class="custom-control custom-checkbox col-md-2">
  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
  <label class="custom-control-label" for="customCheck1">View</label>
</div>
</td>
                            </tr>
                          </tbody>
                        </table>

              <div className="container" >
                <center>
                <button type="button" class="btn btn-success text-center col-1 p-1 m-1">Submit</button>
<button type="button" class="btn btn-danger text-center col-1 p-1 m-1">Cancel</button>
                </center>
                
                   </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</div>

</div>
          {/* Modal Custom Settings*/}
             </div>
  );
}

export default Permissions;
