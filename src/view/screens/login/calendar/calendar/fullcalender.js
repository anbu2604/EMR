import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!


export class patient extends Component {
  render() {
    return (
      <div>
        <div id="ihealth-layout" className="theme-tradewind">
          {/* sidebar */}
          <div className="sidebar px-4 py-4 py-md-5 me-0">
            <div className="d-flex flex-column h-100">
              <a href="index.html" className="mb-0 brand-icon">
                <span className="logo-icon">
                  <i className="icofont-heart-beat fs-2" />
                </span>
                <span className="logo-text">EMR</span>
              </a>
              {/* Menu: main ul */}
              <ul className="menu-list flex-grow-1 mt-3">
                <li>
                  <a class="m-link active" href="./ui">
                    <i class="icofont-ui-home fs-5"></i> <span>Dashboard</span>
                  </a>
                </li>
                {/* <li><a className="m-link" href="virtual.html"><i className="icofont-ui-video-chat fs-5" /> <span>I-Health Virtual</span></a></li> */}
                <li className="collapsed">
                  <a
                    className="m-link"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu-Doctor"
                    href="#"
                  >
                    <i className="icofont-doctor-alt fs-5" />{" "}
                    <span>Doctor</span>{" "}
                    <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
                  </a>
                  {/* Menu: Sub menu ul */}
                  <ul className="sub-menu collapse" id="menu-Doctor">
                    <li>
                      <a className="ms-link" href="doctor-all.html">
                        All Doctors
                      </a>
                    </li>
                    <li>
                      <a className="ms-link" href="doctor-add.html">
                        Add Doctor
                      </a>
                    </li>
                    <li>
                      <a className="ms-link" href="appointment.html">
                        Appointment
                      </a>
                    </li>
                    <li>
                      <a className="ms-link" href="doctor-profile.html">
                        Doctors Profile
                      </a>
                    </li>
                    <li>
                      <a className="ms-link" href="doctor-schedule.html">
                        Doctor Schedule
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="collapsed">
                  <a
                    className="m-link active"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu-Patient"
                    href="#"
                  >
                    <i className="icofont-blind fs-5" /> <span>Patient</span>{" "}
                    <span className="arrow icofont-rounded-down ms-auto text-end fs-5" />
                  </a>
                  {/* Menu: Sub menu ul */}
                  <ul className="sub-menu collapse show" id="menu-Patient">
                    <li>
                      <a className="ms-link" href="patient-list.html">
                        Patient List
                      </a>
                    </li>
                    <li>
                    <a className="ms-link" href="./patient_profile">
                      Add Patient
                    </a>
                    </li>
                    <li>
                      <a className="ms-link" href="patient-invoices.html">
                        Patient Invoices
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="m-link active" href="./cal">
                    <i class="icofont-stretcher fs-5"></i> <span>Schedule</span>
                  </a>
                </li>
              </ul>
              {/* Menu: menu collepce btn */}
              <button
                type="button"
                className="btn btn-link sidebar-mini-btn text-light"
              >
                <span className="ms-2">
                  <i className="icofont-bubble-right" />
                </span>
              </button>
            </div>
          </div>
          {/* main body area */}
          <div className="main px-lg-4 px-md-4">
            {/* Body: Header */}
            <div className="header">
              <nav className="navbar py-4">
                <div className="container-xxl">
                  {/* header rightbar icon */}
                  <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                    <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                      <div className="u-info me-2">
                        <p className="mb-0 text-end line-height-sm ">
                          <span className="font-weight-bold">John Quinn</span>
                        </p>
                        <small>Admin Profile</small>
                      </div>
                      <a
                        className="nav-link dropdown-toggle pulse p-0"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                      >
                        <img
                          className="avatar lg rounded-circle img-thumbnail"
                          src="assets/images/profile_av.png"
                          alt="profile"
                        />
                      </a>
                      <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                        <div className="card border-0 w280">
                          <div className="card-body pb-0">
                            <div className="d-flex py-1">
                              <img
                                className="avatar rounded-circle"
                                src="assets/images/profile_av.png"
                                alt="profile"
                              />
                              <div className="flex-fill ms-3">
                                <p className="mb-0">
                                  <span className="font-weight-bold">
                                    John Quinn
                                  </span>
                                </p>
                                <small className>Johnquinn@gmail.com</small>
                              </div>
                            </div>
                            <div>
                              <hr className="dropdown-divider border-dark" />
                            </div>
                          </div>
                          <div className="list-group m-2 ">
                            <a
                              href="/"
                              className="list-group-item list-group-item-action border-0 "
                            >
                              <i className="icofont-logout fs-6 me-3" />
                              Signout
                            </a>
                            <div>
                              <hr className="dropdown-divider border-dark" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* menu toggler */}
                  <button
                    className="navbar-toggler p-0 border-0 menu-toggle order-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainHeader"
                  >
                    <span className="fa fa-bars" />
                  </button>
                  {/* main menu Search*/}
                  <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 "></div>
                </div>
              </nav>
            </div>
            {/* Body: Body */}
            <div className="body d-flex py-3">
              <h3 className="fw-bold mb-0">Doctor Schedule</h3>

              <div className="container-xxl">
                <div className="usr">
                <form>
                  <div className="row">
                    <div class="form-group col-lg-4">
                      <label for="formGroupExampleInput">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Enter the First Name"
                      />
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="formGroupExampleInput2">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Enter the Last Name"
                      />
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="formGroupExampleInput2">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Enter the Email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div class="form-group col-lg-4">
                      <label for="formGroupExampleInput">Password</label>
                      <input
                        type="Password"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Enter the Password"
                      />
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="formGroupExampleInput2">City</label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                      />
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="formGroupExampleInput2">State</label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                     
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                  <label className="form-label ">Role</label>
                            <select className="form-select col-lg-4" aria-label="Default select example">
                              <option selected>Select</option>
                              <option value={1}>Admin</option>
                              <option value={2}>User</option>
                            </select>
                            </div>
                    <div class="form-group col-lg-4">
                      <label for="formGroupExampleInput2">Status</label>
                      <select className="form-select col-lg-4" aria-label="Default select example">
                              <option selected>Select</option>
                              <option value={1}>Active</option>
                              <option value={2}>In active</option>
                            </select>
                    </div>
                    <div class="form-group col-lg-4">
                      <label for="formGroupExampleInput2">Postal Code</label>
                      <input
                        type="number"
                        class="form-control"
                        id="formGroupExampleInput2"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div class="form-group col-lg-6">
                      <label for="formGroupExampleInput">Address</label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                      />
                    </div>
                    <div class="form-group col-lg-6">
                      <label for="formGroupExampleInput2">Description</label>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                      />
                    </div>
                  </div>
                  <div className="row col-2">
                    <button type="submit" class="btn btn-warning">
                      Create User
                    </button>
                  </div>
                </form>
                </div>
                {" "}
                {/* Row end  */}
              </div>
            </div>
            {/* Modal Custom Settings*/}
            <div
              className="modal fade right"
              id="Settingmodal"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog  modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Custom Settings</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body custom_setting">
                    {/* Settings: Color */}
                    <div className="setting-theme pb-3">
                      <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                        <i className="icofont-color-bucket fs-4 me-2 text-primary" />
                        Template Color Settings
                      </h6>
                      <ul className="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2">
                        <li data-theme="indigo">
                          <div className="indigo" />
                        </li>
                        <li data-theme="tradewind" className="active">
                          <div className="tradewind" />
                        </li>
                        <li data-theme="monalisa">
                          <div className="monalisa" />
                        </li>
                        <li data-theme="blue">
                          <div className="blue" />
                        </li>
                        <li data-theme="cyan">
                          <div className="cyan" />
                        </li>
                        <li data-theme="green">
                          <div className="green" />
                        </li>
                        <li data-theme="orange">
                          <div className="orange" />
                        </li>
                        <li data-theme="blush">
                          <div className="blush" />
                        </li>
                        <li data-theme="red">
                          <div className="red" />
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar-gradient py-3">
                      <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                        <i className="icofont-paint fs-4 me-2 text-primary" />
                        Sidebar Gradient
                      </h6>
                      <div className="form-check form-switch gradient-switch pt-2 mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="CheckGradient"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="CheckGradient"
                        >
                          Enable Gradient! ( Sidebar )
                        </label>
                      </div>
                    </div>
                    {/* Settings: Template dynamics */}
                    <div className="dynamic-block py-3">
                      <ul className="list-unstyled choose-skin mb-2 mt-1">
                        <li data-theme="dynamic">
                          <div className="dynamic">
                            <i className="icofont-paint me-2" /> Click to
                            Dyanmic Setting
                          </div>
                        </li>
                      </ul>
                      <div className="dt-setting">
                        <ul className="list-group list-unstyled mt-1">
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label>Primary Color</label>
                            <button
                              id="primaryColorPicker"
                              className="btn bg-primary avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label>Secondary Color</label>
                            <button
                              id="secondaryColorPicker"
                              className="btn bg-secondary avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label className="text-muted">Chart Color 1</label>
                            <button
                              id="chartColorPicker1"
                              className="btn chart-color1 avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label className="text-muted">Chart Color 2</label>
                            <button
                              id="chartColorPicker2"
                              className="btn chart-color2 avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label className="text-muted">Chart Color 3</label>
                            <button
                              id="chartColorPicker3"
                              className="btn chart-color3 avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label className="text-muted">Chart Color 4</label>
                            <button
                              id="chartColorPicker4"
                              className="btn chart-color4 avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label className="text-muted">Chart Color 5</label>
                            <button
                              id="chartColorPicker5"
                              className="btn chart-color5 avatar xs border-0 rounded-0"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Settings: Font */}
                    <div className="setting-font py-3">
                      <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                        <i className="icofont-font fs-4 me-2 text-primary" />{" "}
                        Font Settings
                      </h6>
                      <ul className="list-group font_setting mt-1">
                        <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="font"
                              id="font-poppins"
                              defaultValue="font-poppins"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="font-poppins"
                            >
                              Poppins Google Font
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="font"
                              id="font-opensans"
                              defaultValue="font-opensans"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="font-opensans"
                            >
                              Open Sans Google Font
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="font"
                              id="font-montserrat"
                              defaultValue="font-montserrat"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="font-montserrat"
                            >
                              Montserrat Google Font
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="font"
                              id="font-mukta"
                              defaultValue="font-mukta"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="font-mukta"
                            >
                              Mukta Google Font
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* Settings: Light/dark */}
                    <div className="setting-mode py-3">
                      <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                        <i className="icofont-layout fs-4 me-2 text-primary" />
                        Contrast Layout
                      </h6>
                      <ul className="list-group list-unstyled mb-0 mt-1">
                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                          <div className="form-check form-switch theme-switch mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="theme-switch"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="theme-switch"
                            >
                              Enable Dark Mode!
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                          <div className="form-check form-switch theme-high-contrast mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="theme-high-contrast"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="theme-high-contrast"
                            >
                              Enable High Contrast
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                          <div className="form-check form-switch theme-rtl mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="theme-rtl"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="theme-rtl"
                            >
                              Enable RTL Mode!
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer justify-content-start">
                    <button
                      type="button"
                      className="btn btn-white border lift"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary lift">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default patient;
