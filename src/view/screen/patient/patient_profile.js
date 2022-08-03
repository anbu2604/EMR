import React, { Component } from "react";
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";
import "./patient_profile.css";

export class patient extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-lg-9">
          <Admin></Admin>

          <div className="col-lg-10">
            {/* Body: Body */}
            <div className="container p-3 m-3">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Who
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Name:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                          <select
                            className="form-select "
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>Mr.</option>
                            <option value={2}>Mrs.</option>
                            <option value={3}>Ms.</option>
                            <option value={4}>Dr.</option>
                            <option value={5}>Baby</option>
                            <option value={6}>Master</option>
                          </select>
                        </div>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12 ">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder="First Name"
                          />
                        </div>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder="Middle Name"
                          />
                        </div>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          External ID:
                        </label>
                        <div class=" col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          DOB:
                        </label>

                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="date"
                            class="form-control"
                            id="formGroupExampleInput2"
                          />
                        </div>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder="Age"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Sex:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                          <select
                            className="form-select "
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>Male</option>
                            <option value={2}>Female</option>
                            <option value={2}>Others</option>
                          </select>
                        </div>
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Aadhar:
                        </label>

                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Marital Status:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={2}>Married</option>
                            <option value={2}>Unmarried</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          User Defined:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12 ">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>

                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                          />
                        </div>
                      </div>

                      {/* <div className="row">
                         
                          <label className="col-md-3 col-lg-2 col-sm-12">Sexual Orientation:</label>

                          <div className="col-lg-2 col-md-3 col-sm-12">
                            <select
                              className="form-select col-lg-4"
                              aria-label="Default select example"
                            >
                              <option selected>Select</option>
                              <option value={1}>Straight or heterosexual</option>
                              <option value={2}>Lesbian, gay or homosexual</option>
                              <option value={2}>Bisexual</option>
                              <option value={2}>Something else, please describe</option>
                              <option value={2}>Don't know</option>
                              <option value={2}>Choose not to disclose</option>
                            </select>
                          </div>
                        </div> */}
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Contact
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Address :
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>

                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Address Line 2:
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-3 col-sm-12">
                          City :
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>

                        <label className="col-md-3 col-lg-3 col-sm-12">
                          State:
                        </label>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>Andhra Pradesh </option>
                            <option value={2}>Arunachal Pradesh </option>
                            <option value={2}>Assam</option>
                            <option value={2}>Bihar</option>
                            <option value={2}>Chhattisgarh</option>
                            <option value={2}>Goa</option>
                            <option value={2}>Gujarat</option>

                            <option value={2}>Haryana</option>
                            <option value={2}>Himachal Pradesh</option>
                            <option value={2}>Jharkhand</option>
                            <option value={2}>Karnataka</option>

                            <option value={2}>Karnataka</option>
                            <option value={2}>Madhya Pradesh</option>

                            <option value={2}>Maharashtra</option>
                            <option value={2}>Manipur</option>
                            <option value={2}>Meghalaya</option>
                            <option value={2}>Mizoram</option>
                            <option value={2}>Nagaland</option>
                            <option value={2}>Odisha</option>
                            <option value={2}>Punjab</option>
                            <option value={2}>Rajasthan</option>
                            <option value={2}>Sikkim</option>
                            <option value={2}>Tamil Nadu</option>
                            <option value={2}>Telangana</option>
                            <option value={2}>Tripura</option>
                            <option value={2}>Uttar Pradesh</option>
                            <option value={2}>Uttarakhand</option>
                            <option value={2}>West Bengal</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Postal Code :
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>

                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Country:
                        </label>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Mother`s Name:
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>

                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Emergency Contact:
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Emergency Phone:
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>

                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Home Phone:
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Work Phone:
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>

                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Mobile Phone:
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Contact Email:
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="email"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>

                        <label className="col-md-3 col-lg-3 col-sm-12">
                          Trusted Email:
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="email"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Choices
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Provider:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>

                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Referring Provider:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Leave Message With:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="email"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Allow Mail Message:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>Unassigned</option>
                            <option value={2}>NO</option>
                            <option value={2}>YES</option>
                          </select>
                        </div>

                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Allow SMS:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>Unassigned</option>
                            <option value={2}>NO</option>
                            <option value={2}>YES</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Allow Email:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>Unassigned</option>
                            <option value={2}>NO</option>
                            <option value={2}>YES</option>
                          </select>
                        </div>
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Allow Patient Portal:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>Unassigned</option>
                            <option value={2}>NO</option>
                            <option value={2}>YES</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Immunization Registry Status:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>Unassigned</option>
                            <option value={2}>Active</option>
                            <option value={3}>
                              Inactive-Lost to follow-up
                            </option>
                            <option value={4}>
                              Inactive - Moved or gone elsewhere
                            </option>
                            <option value={5}>
                              Inactive -Permanently inactive
                            </option>
                            <option value={6}>Inactive -Unspecified</option>
                            <option value={7}>Unknow</option>
                          </select>
                        </div>

                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Immunization Registry Status Effective Date:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="date"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Care Team (Provider):
                        </label>
                        <div className=" col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>

                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Care Team (Facility):
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Care Team Status:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>Active</option>
                            <option value={2}>Inactive</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Employer
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Occupation:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Employer Name:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Employer Address:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Employer Address Line 2:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          City:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          State:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Postal Code:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Country:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Industry:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Religion:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Non- Religion:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                   Sats
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Language:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                        <label className="col-md-3 col-lg-2 col-sm-12">
                        Family Size:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        </div>
                        <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Financial Review Date:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="date"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        <label className="col-md-3 col-lg-2 col-sm-12">
                       Monthly Income:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        </div>
                        <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Referral Source:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                        
                        </div>
                        <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Religion:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                        
                        </div>
                        </div>
                        </div>
                        </div>
                        <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                   Misc
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Date Deceased:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="date"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        </div>
                        <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Reason Deceased:
                        </label>
                        <div class="form-group col-lg-4 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        </div>
                        </div>
                        </div>
                        </div> */}
                {/* <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSeven">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                   Guardian
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Name:
                        </label>
                        <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        <label className="col-md-3 col-lg-2 col-sm-12">
                        Relationship:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>Associate</option>
                            <option value={2}>Brother</option>
                            <option value={2}>Care Giver</option>
                            <option value={2}>Child</option>
                            <option value={2}>Handicapped dependent</option>
                            <option value={2}>Life Partner</option>
                            <option value={2}>Emergency contact</option>
                            <option value={2}>Employee</option>
                            <option value={2}>Employer</option>
                            <option value={2}>Extended Family</option>
                            <option value={2}>Foster Child</option>
                            <option value={2}>Friend</option>
                            <option value={2}>Father</option>
                            <option value={2}>Grandchild</option>
                            <option value={2}>Guardian</option>
                            <option value={2}>Grandparent</option>
                            <option value={2}>Manager</option>
                            <option value={2}>Mother</option>
                            <option value={2}>Natural Child</option>
                            <option value={2}>None</option>
                            <option value={2}>Other Adult</option>
                            <option value={2}>Others</option>
                            <option value={2}>Owner</option>
                            <option value={2}>Parent</option>
                          </select>
                        </div>
                        </div>
                        <div className="row">
                       
                        <label className="col-md-3 col-lg-2 col-sm-12">
                        Sex:
                        </label>
                        <div className="col-lg-2 col-md-3 col-sm-12 ">
                          <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>""</option>
                            <option value={2}>""</option>
                            <option value={2}>""</option>
                          </select>
                        </div>
                        <label className="col-md-3 col-lg-2 col-sm-12">
                          Address:
                        </label>
                        <div class="form-group col-lg-3 col-md-3 col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                        </div>
                        <div className="row">
                       
                       <label className="col-md-3 col-lg-2 col-sm-12">
                       City:
                       </label>
                       <div className="col-lg-2 col-md-3 col-sm-12 ">
                         <select
                           className="form-select col-lg-4"
                           aria-label="Default select example"
                         >
                           <option selected>Select</option>
                           <option value={1}>""</option>
                           <option value={2}>""</option>
                           <option value={2}>""</option>
                         </select>
                       </div>
                       <label className="col-md-3 col-lg-2 col-sm-12">
                         State:
                       </label>
                       <div className="col-lg-2 col-md-3 col-sm-12 ">
                         <select
                           className="form-select col-lg-4"
                           aria-label="Default select example"
                         >
                           <option selected>Select</option>
                           <option value={1}>""</option>
                           <option value={2}>""</option>
                           <option value={2}>""</option>
                         </select>
                       </div>
                       </div>
                       <div className="row">
                       
                       <label className="col-md-3 col-lg-2 col-sm-12">
                       Postal Code:
                       </label>
                       <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                       <label className="col-md-3 col-lg-2 col-sm-12">
                         Country:
                       </label>
                       <div className="col-lg-2 col-md-3 col-sm-12 ">
                         <select
                           className="form-select col-lg-4"
                           aria-label="Default select example"
                         >
                           <option selected>Select</option>
                           <option value={1}>""</option>
                           <option value={2}>""</option>
                           <option value={2}>""</option>
                         </select>
                       </div>
                       </div>
                       <div className="row">
                       
                       <label className="col-md-3 col-lg-2 col-sm-12">
                        Phone:
                       </label>
                       <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                       <label className="col-md-3 col-lg-2 col-sm-12">
                         Work Phone:
                       </label>
                       <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                       </div>
                       <div className="row">
                       
                       <label className="col-md-3 col-lg-2 col-sm-12">
                        Email:
                       </label>
                       <div class="form-group col-lg-2 col-md-3 col-sm-12">
                          <input
                            type="email"
                            class="form-control"
                            id="formGroupExampleInput2"
                            placeholder=""
                          />
                        </div>
                      
                       </div>
                        </div>
                        </div>
                        </div> */}
              </div>
            </div>
            <div className="container p-2 m-2">
              <center>
                <button
                  type="button"
                  class="btn btn-success text-center col-2 p-1 m-1"
                >
                  Create New Patient
                </button>
              </center>
            </div>

            {/* Modal Custom Settings*/}
          </div>
        </div>
      </div>
    );
  }
}

export default patient;
