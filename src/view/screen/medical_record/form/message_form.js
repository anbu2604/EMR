import React from "react";
import Admin from "../../../components/admin";
import Sidebar from "../../../components/sidebar";

const Medical_form = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-9">
        <Admin></Admin>
        <div className="col-lg-12">
        <div class="btn-group " role="group" aria-label="Basic example">
  <button type="button" class="btn btn-warning"> <i class="icofont-plus p-1 m-1"></i>Add</button>
  <button type="button" class="btn btn-danger"><a href="./medical_report"><i class="icofont-double-left p-1 m-1"></i></a>Back to Patient</button>
  <button type="button" class="btn btn-warning"><i class="icofont-refresh p-1 m-1"></i>Refresh</button>
  <button type="button" class="btn btn-danger">Update Actve</button>
</div>
<div className="row">
  <div className="col-lg-11 mt-5 p-4 bg-secondary">
  <button type="button" class="btn btn-secondary"> Show All</button>
<label className="p-1 m-1">Show Active</label>
<button type="button" class="btn btn-secondary"> Show Inactive</button>
<label className="p-1 m-1">Balance Due -25.00 </label>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Actions</th>
      <th scope="col">Active</th>
      <th scope="col">Type</th>
      <th scope="col">Content</th>
      <th scope="col">Status</th>
      <th scope="col">Last update	</th>
      <th scope="col">Update by
</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    
  </tbody>
</table>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Medical_form;
