import React, { Component } from 'react'
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";
export class patient extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className='col-lg-9'>
         <Admin></Admin>
      <div className="col-lg-11"> 


        
          {/* Body: Body */}
          <div className="body d-flex py-3">
            <div className="container-xxl">
              <div className="row align-items-center">
                <div className="border-0 mb-4">
                  <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                    <h3 className="fw-bold mb-0">Add Patients</h3>
                  </div>
                </div>
              </div> {/* Row end  */}
              <div className="row mb-3">
                <div className="col-sm-12">
                  <div className="card mb-3">
                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                      <h6 className="mb-0 fw-bold ">Patients Basic Inforamtion</h6>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="row g-3 align-items-center">
                          <div className="col-md-3">
                            <label htmlFor="firstname" className="form-label"> Title & Initials</label>
                            <input type="text" className="form-control" id="firstname" />
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="firstname" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstname" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="lastname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastname" />
                          </div>
                          <div className="col-md-3">
                            <label className="form-label">Gender</label>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Select</option>
                              <option value={1}>Female</option>
                              <option value={2}>Male</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="phonenumber" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phonenumber" />
                          </div>
                          <div className="col-md-3">
                            <label className="form-label">Marital Status</label>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Select</option>
                              <option value={1}>Single</option>
                              <option value={2}>Married</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="emailaddress" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="emailaddress" />
                          </div>
                          <div className="col-md-3">
                            <label className="form-label">Occupation</label>
                            <select className="form-select" aria-label="Default select example">
                              <option selected></option>
                              <option value={1}>Single</option>
                              <option value={2}>Married</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="admitdate" className="form-label">Date of birth</label>
                            <input type="date" className="form-control" id="admitdate" />
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="admittime" className="form-label">Age</label>
                            <input type="number" className="form-control" id="admittime" />
                          </div>
                          {/* <div className="col-md-3">
                            <label htmlFor="admittime" className="form-label">Admit Time</label>
                            <input type="time" className="form-control" id="admittime" />
                          </div> */}
                          <div className="col-md-3">
                            <label htmlFor="admittime" className="form-label">Relationship Type	</label>
                            <input type="text" className="form-control" id="admittime" placeholder='Enter the Type'  />
                          </div>
                          {/* <div className="col-md-6">
                            <label htmlFor="formFileMultiple" className="form-label">Files Document Upload</label>
                            <input className="form-control" type="file" id="formFileMultiple" multiple />
                          </div> */}
                           <div className="col-md-3">
                            <label htmlFor="Relation Name" className="form-label"> Relation Name	</label>
                            <input type="text" className="form-control" id="firstname" />
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="Relation Number" className="form-label"> Relation Number	</label>
                            <input type="number" className="form-control" id="firstname" />
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="Door No/Street" className="form-label">  Door No/Street	</label>
                            <input type="text" className="form-control" id="firstname" />
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="Area" className="form-label">  Area	</label>
                            <input type="text" className="form-control" id="firstname" />
                          </div>
                          {/* <div className="col-md-6">
                            <label className="form-label">Gender</label>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios11" defaultValue="option1" defaultChecked />
                                  <label className="form-check-label" htmlFor="exampleRadios11">
                                    Male
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios22" defaultValue="option2" />
                                  <label className="form-check-label" htmlFor="exampleRadios22">
                                    Female
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div> */}
                           <div className="col-md-3">
                            <label className="form-label">State</label>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Select</option>
                              <option value={1}>Tamil nadu</option>
                              <option value={2}>*</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label">District</label>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Select</option>
                              <option value={1}>Thanjavur</option>
                              <option value={2}>*</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="Postal Code	" className="form-label"> Postal Code</label>
                            <input type="number" className="form-control" id="firstname" />
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="Postal Code	" className="form-label">Reffered By	</label>
                            <input type="text" className="form-control" id="firstname" placeholder='Enter the Reference' />
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="Postal Code	" className="form-label">Referral Doctor		</label>
                            <input type="text" className="form-control" id="firstname" placeholder='Enter the Dr.Name' />
                          </div>
                          <div className="col-md-3">
                            <label className="form-label">Patient Type*	</label>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Staff</option>
                              <option value={1}>Normal</option>
                              <option value={2}>ESI</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="Postal Code	" className="form-label">Weight (in Kgs)	</label>
                            <input type="number" className="form-control" id="firstname" />
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="Postal Code	" className="form-label">Height (in Cms)		</label>
                            <input type="number" className="form-control" id="firstname" />
                          </div>
                          {/* <div className="col-md-12">
                            <label htmlFor="addnote" className="form-label">Add Note</label>
                            <textarea className="form-control" id="addnote" rows={3} defaultValue={""} /> 
                          </div> */}
                        </div>

                        <button type="submit" className="btn btn-primary mt-4">Submit</button>
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

export default patient;
