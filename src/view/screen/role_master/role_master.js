import React, { Component } from "react";
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";

function Role_Master() {
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
                    <h3 className="fw-bold mb-0 col-lg-9">Role Master</h3>
                    <div className="col-lg-3">
                    <button type="button" class="btn btn-info"><a href="./add_role"><i class="icofont-plus"></i>Add New Role</a> </button>

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
                    <div className="row align-content-end justify-content-end"><button type="button" class="btn btn-primary col-1 m-1 ">Excel</button>
<button type="button" class="btn btn-primary col-1 m-1">CSV</button>
<button type="button" class="btn btn-primary col-1 m-1">PDF</button>
<button type="button" class="btn btn-primary col-1 m-1">Print</button>
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
                    <div className="card-body">
                      <form className="d-flex justify-content-center align-content-center ">
                        <table class=" table table-bordered border border-2">
                          <thead className="text-center">
                            <tr>
                              <th scope="col-2">Role ID</th>
                              <th scope="col-9">Role Name</th>
                              <th scope="col-9">Reporting Role</th>
                              <th scope="col-9">Status </th>
                              <th scope="col-9">Action </th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                          
                            <tr>
                              <th scope="row">1</th>
                              <td>Admin</td>
                              <td>Super Admin</td>
                              <td><button type="button" class="btn btn-success">Active</button>
                              </td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit p-1 m-1"></i></a>
                              <i class="icofont-ui-delete"></i>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Super Admin</td>
                              <td>-</td>
                              <td><button type="button" class="btn btn-success">Active</button>
</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit p-1 m-1"></i></a>
                              <i class="icofont-ui-delete"></i>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Physician</td>
                              <td>Admin</td>
                              <td><button type="button" class="btn btn-success">Active</button>
</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit p-1 m-1"></i></a>
                              <i class="icofont-ui-delete"></i>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Clinician</td>
                              <td>Physician</td>
                              <td><button type="button" class="btn btn-success">Active</button>
</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit p-1 m-1"></i></a>
                              <i class="icofont-ui-delete"></i>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>Accountant</td>
                              <td>Admin</td>
                              <td><button type="button" class="btn btn-success">Active</button>
</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit p-1 m-1"></i></a>
                              <i class="icofont-ui-delete"></i>
                              </td>
                            </tr>

                            <tr>
                              <th scope="row">6</th>
                              <td>Doctor</td>
                              <td>Admin</td>
                              <td><button type="button" class="btn btn-success">Active</button>
</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit p-1 m-1"></i></a>
                              <i class="icofont-ui-delete"></i>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">7</th>
                              <td>Patient</td>
                              <td>Doctor</td>
                              <td><button type="button" class="btn btn-success">Active</button>
</td>
                              <td>
                              <a href="./permissions"> <i class="icofont-edit p-1 m-1"></i></a>
                              <i class="icofont-ui-delete"></i>
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

          {/* Modal Custom Settings*/}
         </div>
        
         </div>
    </div>
  );
}

export default Role_Master;
