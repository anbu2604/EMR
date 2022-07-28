import React, { Component } from "react";
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";


function Add_role() {
  return (
    <div className="row d-flex">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-7">
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
                     <labe className="col-3 p-4">  Role ID</labe>
                     <input type="number" className="col-3 p-1 m-1 mb-3" />
                   </div>
                   <div className="container">
                     <labe className="col-3 p-3">  Role Name</labe>
                     <input type="text" className="col-3 p-1 m-1 mb-3" />
                   </div>
                   <div className="container text-center">
                     <labe className="col-3 p-1 m-1 mb-3">  Reporting Role</labe>
                     <select name="cars" className="col-3 p-1 m-1 mb-3">
                      <option value="volvo">Select one</option>
                      <option value="saab">Super Admin</option>
                      <option value="opel">Admin</option>
                      <option value="audi">Doctor</option>
                      <option value="audi">Physician</option>
                      <option value="audi">Clinician</option>
                      <option value="audi">Patient</option>
                    </select>
                   </div>
                   <div className="container">
                   <button type="button" class="btn btn-success text-center col-1 p-1 m-1">Submit</button>
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













  );
}

export default Add_role;
