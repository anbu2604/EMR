import React from "react";
import Sidebar from "../../../components/sidebar";
import Admin from "../../../components/admin";
const rules = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-9">
        <Admin></Admin>
        <div className="col-lg-12 border-5">
          <nav class="navbar navbar-expand-lg navbar-light bg-info col-lg-9">
            <div class="container-md ">
              <a class="navbar-brand col-lg-1" href="./patient_reminder">
                Main--
              </a>
              <a class="navbar-brand col-lg-12" href="./rules">
                Rules
              </a>
            </div>
          </nav>
          <div className="row">
            <div class="card col-lg-5">
              <div class="card-body fw-bold px-5 m-4 text-center">Rule </div>
              <hr></hr>
              <div class="card-body">
                Adult Weight Screening and Follow-Up .
              </div>
              <hr></hr>
              <div class="card-body">Measure Blood Pressure.</div>
              <hr></hr>
              
            </div>
            <div class="card col-lg-5 ">
              <div class="card-body fw-bold p-1">Patient Reminder</div>
              <hr></hr>
              <div className="row ">
                <div class="card col-lg-5 ">
                  <div class="card-body fw-bold  ">Patient Setting </div>
                </div>
                <div class="card col-lg-7 p-1">
                  <div class="card-body fw-bold ">Practice Default Setting</div>
                </div>
              </div>
              <div class="card-body">
                {" "}
                <div className="row">
                <div className="col-lg-5 col-md-3 col-sm-12">
                  <select
                    className="form-select col-lg-4"
                    aria-label="Default select example"
                  >
                    <option selected>Default</option>
                    <option value={1}>On</option>
                    <option value={2}>Off</option>
                  </select>
                </div>
                <div className="col-lg-5 col-md-3 col-sm-12 text-center">
                <label className="col-lg-2 col-md-3 col-sm-12">Off</label>
                </div>
                
               </div>
              </div>
              <hr></hr>
              <div class="card-body">
                {" "}
                <div className="row">
                <div className="col-lg-5 col-md-3 col-sm-12">
                  <select
                    className="form-select col-lg-4"
                    aria-label="Default select example"
                  >
                    <option selected>Default</option>
                    <option value={1}>On</option>
                    <option value={2}>Off</option>
                  </select>
                </div>
                <div className="col-lg-5 col-md-3 col-sm-12 text-center">
                <label className="col-lg-2 col-md-3 col-sm-12">Off</label>
                </div>
                
               </div>
              </div>
              <hr></hr>    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rules;
