import React, { Component } from "react";
import Admin from "../../../components/admin";

import Sidebar from "../../../components/sidebar";

function Access_privilege() {
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-7">
      
          {/* Body: Body */}

          <div className="body d-flex py-3">
            <div className="container-xxl">
              <div className="row align-items-center">
                <div className="border-0 mb-4">
                  <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                    <h3 className="fw-bold mb-0 col-lg-8">Access privilege</h3>
                    <div className="col-4">
                    <button type="button" class="btn btn-info"><a href="./permissions"><i class="icofont-plus"></i>Add Access Privilege</a></button>

                    </div>
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
                      <div className="col-lg-8 col-md-2 col-sm-12  ">
                        Show
                        <select name="cars" id="cars">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                        </select>
                        <label>entries</label>
                      </div>
                      <div className="col float-end">
                          <label>Search:</label>
                          <input type="text" class="searchTerm" />
                      </div>
                    </div>
                    <div className="card-body" >
                      <form className="d-flex align-items-center ">
                        <table class=" table table-bordered border border-2">
                          <thead className="text-center">
                            <tr>
                              <th scope="col-2">Role ID</th>
                              <th scope="col-9">Role Name</th>
                              <th scope="col-9">Action </th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            
                            <tr>
                              <th scope="row">1</th>
                              <td>Admin</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit"></i></a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Super Admin</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit"></i></a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Doctor</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit"></i></a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Physician</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit"></i></a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>Clinician</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit"></i></a>
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">6</th>
                              <td>Doctor</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit"></i></a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">7</th>
                              <td>Accountant</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit"></i></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </form>
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
          {/* Modal Custom Settings*/}
             </div>
  );
}

export default Access_privilege;
