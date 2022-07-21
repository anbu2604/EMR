import React, { Component } from 'react'
const url = "http://localhost:3000/patient";

export class patient extends Component {
  render() {
    return (
      <div>
         <div id="ihealth-layout" className="theme-tradewind">
        {/* sidebar */}
        <div className="sidebar px-4 py-4 py-md-5 me-0">
          <div className="d-flex flex-column h-100">
          <a href="./Dashborad" className="mb-0 brand-icon">
              <span className="logo-icon">
                <i className="icofont-heart-beat fs-2" />
              </span>
              <span className="logo-text">EMR</span>
            </a>
            {/* Menu: main ul */}
            <ul className="menu-list flex-grow-1 mt-3">
            <li><a class="m-link" href="./Dashborad"><i class="icofont-ui-home fs-5"></i> <span>Dashboard</span></a></li>
              <li>
                <a class="m-link " href="./role_master">
                <i class="icofont-user-alt-1"></i> <span>Role Master</span>
                </a>
              </li>
              <li>
                <a class="m-link " href="./access">
                  <i class="icofont-ui-user"></i> <span>Access Privilege</span>
                </a>
              </li>
              
              <li className="collapsed">
                <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Doctor" href="#">
                  <i className="icofont-doctor-alt fs-5" />  <span>Doctor</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5" /></a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse" id="menu-Doctor">
                  <li><a className="ms-link" href="doctor-all.html">All Doctors</a></li>
                  <li><a className="ms-link" href="doctor-add.html">Add Doctor</a></li>
                  <li><a className="ms-link" href="appointment.html">Appointment</a></li>
                  <li><a className="ms-link" href="doctor-profile.html">Doctors Profile</a></li>
                  <li><a className="ms-link" href="doctor-schedule.html">Doctor Schedule</a></li>
                </ul>
              </li>
              <li className="collapsed">
                <a className="m-link " data-bs-toggle="collapse" data-bs-target="#menu-Patient" href="#">
                  <i className="icofont-blind fs-5" /> <span>Patient</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5" /></a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse show" id="menu-Patient">
                  <li><a className="ms-link" href="./patient_list">Patient List</a></li>
                  <li><a className="ms-link active" href={url}>Add Patient</a></li>
                  {/* <li><Link to="/calender" > Contact us </Link> </li> */}

                  <li><a className="ms-link" href="./patient_profile">Patient Profile</a></li>
                  <li><a className="ms-link" href="patient-invoices.html">Patient Invoices</a></li>

                </ul>
              </li>
              <li><a class="m-link" href="./cal"><i class="icofont-stretcher fs-5"></i> <span>Schedule</span></a></li>
              
              {/* <li><a className="m-link" href="accidents.html"><i className="icofont-stretcher fs-5" /> <span>Accidents</span></a></li>
              <li><a className="m-link" href="labs.html"><i className="icofont-blood-test fs-5" /> <span>Labs</span></a></li>
              <li><a className="m-link" href="department.html"><i className="icofont-hospital fs-5" /> <span>Department</span></a></li>
              <li className="collapsed">
                <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Componentsone" href="#"><i className="icofont-ui-calculator" /> <span>Accounts</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5" /></a> */}
                {/* Menu: Sub menu ul */}
                {/* <ul className="sub-menu collapse" id="menu-Componentsone">
                  <li><a className="ms-link" href="invoices.html"><span>Invoices</span> </a></li>
                  <li><a className="ms-link" href="payments.html"><span>Payments</span> </a></li>
                  <li><a className="ms-link" href="expenses.html"><span>Expenses</span> </a></li>
                </ul>
              </li> */}
              {/* <li className="collapsed">
                <a className="m-link" data-bs-toggle="collapse" data-bs-target="#app" href="#">
                  <i className="icofont-code-alt fs-5" /> <span>App</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5" /></a> */}
                {/* Menu: Sub menu ul */}
                {/* <ul className="sub-menu collapse" id="app">
                  <li><a className="ms-link" href="calendar.html">Calandar</a></li>
                  <li><a className="ms-link" href="chat.html"> Communication</a></li>
                </ul>
              </li> */}
              {/* <li><a className="m-link" href="ui-elements/ui-alerts.html"><i className="icofont-paint fs-5" /> <span>UI Components</span></a></li> */}
              {/* <li className="collapsed">
                <a className="m-link" data-bs-toggle="collapse" data-bs-target="#page" href="#">
                  <i className="icofont-page fs-5" /> <span>Pages Example</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5" /></a> */}
                {/* Menu: Sub menu ul */}
                {/* <ul className="sub-menu collapse" id="page">
                  <li><a className="ms-link" href="table.html">Table Example</a></li>
                  <li><a className="ms-link" href="forms.html"> Forms Example</a></li>
                  <li><a className="ms-link" href="icon.html"> Icons Example</a></li>
                  <li><a className="ms-link" href="contact.html"> Contact Example</a></li>
                </ul>
              </li> */}
            </ul>
            {/* Menu: menu collepce btn */}
            <button type="button" className="btn btn-link sidebar-mini-btn text-light">
              <span className="ms-2"><i className="icofont-bubble-right" /></span>
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
                      <p className="mb-0 text-end line-height-sm "><span className="font-weight-bold">John Quinn</span></p>
                      <small>Admin Profile</small>
                    </div>
                    <a className="nav-link dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static">
                      <img className="avatar lg rounded-circle img-thumbnail" src="assets/images/profile_av.png" alt="profile" />
                    </a>
                    <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                      <div className="card border-0 w280">
                        <div className="card-body pb-0">
                          <div className="d-flex py-1">
                            <img className="avatar rounded-circle" src="assets/images/profile_av.png" alt="profile" />
                            <div className="flex-fill ms-3">
                              <p className="mb-0"><span className="font-weight-bold">John	Quinn</span></p>
                              <small className>Johnquinn@gmail.com</small>
                            </div>
                          </div>
                          <div><hr className="dropdown-divider border-dark" /></div>
                        </div>
                        <div className="list-group m-2 ">
                        <a href="/" className="list-group-item list-group-item-action border-0 "><i className="icofont-logout fs-6 me-3" />Signout</a>
                          <div><hr className="dropdown-divider border-dark" /></div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
                {/* menu toggler */}
                <button className="navbar-toggler p-0 border-0 menu-toggle order-3" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader">
                  <span className="fa fa-bars" />
                </button>
                {/* main menu Search*/}
                <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                  {/* <div className="input-group flex-nowrap input-group-lg">
                    <input type="search" className="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping" />
                    <button type="button" className="input-group-text" id="addon-wrapping"><i className="fa fa-search" /></button>
                  </div> */}
                </div>
              </div>
            </nav>
          </div>
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
          {/* Modal Custom Settings*/}
          <div className="modal fade right" id="Settingmodal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog  modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Custom Settings</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body custom_setting">
                  {/* Settings: Color */}
                  <div className="setting-theme pb-3">
                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-color-bucket fs-4 me-2 text-primary" />Template Color Settings</h6>
                    <ul className="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2">
                      <li data-theme="indigo"><div className="indigo" /></li>
                      <li data-theme="tradewind" className="active"><div className="tradewind" /></li>
                      <li data-theme="monalisa"><div className="monalisa" /></li>
                      <li data-theme="blue"><div className="blue" /></li>
                      <li data-theme="cyan"><div className="cyan" /></li>
                      <li data-theme="green"><div className="green" /></li>
                      <li data-theme="orange"><div className="orange" /></li>
                      <li data-theme="blush"><div className="blush" /></li>
                      <li data-theme="red"><div className="red" /></li>
                    </ul>
                  </div>
                  <div className="sidebar-gradient py-3">
                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-paint fs-4 me-2 text-primary" />Sidebar Gradient</h6>
                    <div className="form-check form-switch gradient-switch pt-2 mb-2">
                      <input className="form-check-input" type="checkbox" id="CheckGradient" />
                      <label className="form-check-label" htmlFor="CheckGradient">Enable Gradient! ( Sidebar )</label>
                    </div>
                  </div>
                  {/* Settings: Template dynamics */}
                  <div className="dynamic-block py-3">
                    <ul className="list-unstyled choose-skin mb-2 mt-1">
                      <li data-theme="dynamic"><div className="dynamic"><i className="icofont-paint me-2" /> Click to Dyanmic Setting</div></li>
                    </ul>
                    <div className="dt-setting">
                      <ul className="list-group list-unstyled mt-1">
                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                          <label>Primary Color</label>
                          <button id="primaryColorPicker" className="btn bg-primary avatar xs border-0 rounded-0" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                          <label>Secondary Color</label>
                          <button id="secondaryColorPicker" className="btn bg-secondary avatar xs border-0 rounded-0" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                          <label className="text-muted">Chart Color 1</label>
                          <button id="chartColorPicker1" className="btn chart-color1 avatar xs border-0 rounded-0" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                          <label className="text-muted">Chart Color 2</label>
                          <button id="chartColorPicker2" className="btn chart-color2 avatar xs border-0 rounded-0" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                          <label className="text-muted">Chart Color 3</label>
                          <button id="chartColorPicker3" className="btn chart-color3 avatar xs border-0 rounded-0" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                          <label className="text-muted">Chart Color 4</label>
                          <button id="chartColorPicker4" className="btn chart-color4 avatar xs border-0 rounded-0" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                          <label className="text-muted">Chart Color 5</label>
                          <button id="chartColorPicker5" className="btn chart-color5 avatar xs border-0 rounded-0" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Settings: Font */}
                  <div className="setting-font py-3">
                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-font fs-4 me-2 text-primary" /> Font Settings</h6>
                    <ul className="list-group font_setting mt-1">
                      <li className="list-group-item py-1 px-2">
                        <div className="form-check mb-0">
                          <input className="form-check-input" type="radio" name="font" id="font-poppins" defaultValue="font-poppins" />
                          <label className="form-check-label" htmlFor="font-poppins">
                            Poppins Google Font
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item py-1 px-2">
                        <div className="form-check mb-0">
                          <input className="form-check-input" type="radio" name="font" id="font-opensans" defaultValue="font-opensans" defaultChecked />
                          <label className="form-check-label" htmlFor="font-opensans">
                            Open Sans Google Font
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item py-1 px-2">
                        <div className="form-check mb-0">
                          <input className="form-check-input" type="radio" name="font" id="font-montserrat" defaultValue="font-montserrat" />
                          <label className="form-check-label" htmlFor="font-montserrat">
                            Montserrat Google Font
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item py-1 px-2">
                        <div className="form-check mb-0">
                          <input className="form-check-input" type="radio" name="font" id="font-mukta" defaultValue="font-mukta" />
                          <label className="form-check-label" htmlFor="font-mukta">
                            Mukta Google Font
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Settings: Light/dark */}
                  <div className="setting-mode py-3">
                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-layout fs-4 me-2 text-primary" />Contrast Layout</h6>
                    <ul className="list-group list-unstyled mb-0 mt-1">
                      <li className="list-group-item d-flex align-items-center py-1 px-2">
                        <div className="form-check form-switch theme-switch mb-0">
                          <input className="form-check-input" type="checkbox" id="theme-switch" />
                          <label className="form-check-label" htmlFor="theme-switch">Enable Dark Mode!</label>
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center py-1 px-2">
                        <div className="form-check form-switch theme-high-contrast mb-0">
                          <input className="form-check-input" type="checkbox" id="theme-high-contrast" />
                          <label className="form-check-label" htmlFor="theme-high-contrast">Enable High Contrast</label>
                        </div>
                      </li>
                      <li className="list-group-item d-flex align-items-center py-1 px-2">
                        <div className="form-check form-switch theme-rtl mb-0">
                          <input className="form-check-input" type="checkbox" id="theme-rtl" />
                          <label className="form-check-label" htmlFor="theme-rtl">Enable RTL Mode!</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="modal-footer justify-content-start">
                  <button type="button" className="btn btn-white border lift" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary lift">Save Changes</button>
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
