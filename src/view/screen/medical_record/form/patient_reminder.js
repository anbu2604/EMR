import React from "react";
import Admin from "../../../components/admin";
import Sidebar from "../../../components/sidebar";

const patient_reminder = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-9">
        <Admin></Admin>
        <div className="col-lg-10 border-5" >
          <nav class="navbar navbar-expand-lg navbar-light bg-info col-lg-9">
            <div class="container-md ">
              <a class="navbar-brand col-lg-1" href="./patient_reminder">
                Main
              </a>
              <a class="navbar-brand col-lg-10" href="./rules">
                Rules
              </a>
            </div>
          </nav>
          <button type="button" class="btn btn-secondary p-2 m-2"><i class="icofont-refresh p-1 "></i>Refresh</button>
          <table class="table">
  <thead>
    <tr >
      <th scope="col" class="table-secondary">Item <i class="icofont-caret-down"></i></th>
      <th scope="col" class="table-secondary">Patient <i class="icofont-caret-down"></i></th>
      <th scope="col" class="table-secondary">Due Status  <i class="icofont-caret-down"></i></th>
      <th scope="col" class="table-secondary">Date Created  <i class="icofont-caret-down"></i></th>
      <th scope="col" class="table-secondary">Email Auth  <i class="icofont-caret-down"></i></th>
      <th scope="col" class="table-secondary">SMS Auth  <i class="icofont-caret-down"></i></th>
      <th scope="col" class="table-secondary">Date Sent  <i class="icofont-caret-down"></i></th>
      <th scope="col" class="table-secondary">Email Sent  <i class="icofont-caret-down"></i></th>
      <th scope="col" class="table-secondary">SMS Sent  <i class="icofont-caret-down"></i></th>
      <th scope="col" class="table-secondary">SMS Sent  <i class="icofont-caret-down"></i></th>
    </tr>
   
  </thead>
</table>
        </div>
      </div>
      
    </div>
  );
};

export default patient_reminder;

