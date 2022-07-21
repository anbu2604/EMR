import React, { Component } from 'react';
import patient from "./patient";
const url = "http://localhost:3000/patient";
export class cal extends Component {
  render() {
    return (
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
            <li><a class="m-link " href="./ui"><i class="icofont-ui-home fs-5"></i> <span>Dashboard</span></a></li>
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
                <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Patient" href="#">
                  <i className="icofont-blind fs-5" /> <span>Patient</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5" /></a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse" id="menu-Patient">
                  <li><a className="ms-link" href="patient-list.html">Patient List</a></li>
                  <li><a className="ms-link" href={url}>Add Patient</a></li>
                  {/* <li><Link to="/calender" > Contact us </Link> </li> */}

                  <li><a className="ms-link" href="patient-profile.html">Patient Profile</a></li>
                  <li><a className="ms-link" href="patient-invoices.html">Patient Invoices</a></li>
                  <li><a className="ms-link" href="./cal">Schedule</a></li>

                </ul>
              </li>
              <li><a class="m-link active" href="./cal"><i class="icofont-stretcher fs-5"></i> <span>Schedule</span></a></li>
          
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
          <div className="body d-flex py-lg-3 py-md-2">
            <div className="container-xxl">
              <div className="row align-items-center">
                <div className="border-0 mb-4">
                  <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                    <h3 className="fw-bold mb-0">Doctor Schedule</h3>
                    <div className="col-auto d-flex w-sm-100">
                      <button type="button" className="btn btn-primary btn-set-task w-sm-100" data-bs-toggle="modal" data-bs-target="#depadd"><i className="icofont-plus-circle me-2 fs-6" />Add Schedule</button>
                    </div>
                  </div>
                </div>
              </div> {/* Row end  */}
              <div className="row clearfix g-3">
                <div className="col-sm-12">
                  <div className="card mb-3">
                    <div className="card-body overflow-auto">
                      <div className="schedule">
                        <div className="schedule_header">
                          <span className="dl">Time</span>
                          <span className="ds">Ti</span>
                        </div>
                        {/* week*/}
                        <div className="schedule_header schedule-sunday">
                          <span className="dl">Sunday</span>
                          <span className="ds">Su</span>
                        </div>
                        <div className="schedule_header schedule-monday">
                          <span className="dl">Monday</span>
                          <span className="ds">M</span>
                        </div>
                        <div className="schedule_header schedule-tuesday">
                          <span className="dl">Tuesday</span>
                          <span className="ds">T</span>
                        </div>
                        <div className="schedule_header schedule-wednesday">
                          <span className="dl">Wednesday</span>
                          <span className="ds">W</span>
                        </div>
                        <div className="schedule_header schedule-thursday">
                          <span className="dl">Thursday</span>
                          <span className="ds">Th</span>
                        </div>
                        <div className="schedule_header schedule-friday">
                          <span className="dl">Friday</span>
                          <span className="ds">F</span>
                        </div>
                        <div className="schedule_header schedule-saturday">
                          <span className="dl">Saturday</span>
                          <span className="ds">Sa</span>
                        </div>
                        {/* Time*/}
                        <div className="schedule_time time-from-s">07:00 AM</div>
                        <div className="schedule_time time-from-sf">08:15 AM</div>
                        <div className="schedule_time time-from-st">10:30 AM</div>
                        <div className="schedule_time time-from-sff">12:45 AM</div>
                        <div className="schedule_time time-from-e">01:00 PM</div>
                        <div className="schedule_time time-from-ef">02:15 PM</div>
                        <div className="schedule_time time-from-et">03:30 PM</div>
                        <div className="schedule_time time-from-eff">04:45 PM</div>
                        <div className="schedule_time time-from-n">05:00 PM</div>
                        <div className="schedule_time time-from-nf">06:15 PM</div>
                        <div className="schedule_time time-from-nt">07:30 PM</div>
                        <div className="schedule_time time-from-nff">09:45 PM</div>
                        {/*  Grid Rows*/}
                        <div className="grid time-from-s time-to-sf schedule-row-from-sunday schedule-row-to-saturday" />
                        <div className="grid time-from-sf time-to-st schedule-row-from-sunday schedule-row-to-saturday" />
                        <div className="grid time-from-st time-to-sff schedule-row-from-sunday schedule-row-to-saturday" />
                        <div className="grid time-from-sff time-to-e schedule-row-from-sunday schedule-row-to-saturday" />
                        <div className="grid time-from-e time-to-ef schedule-row-from-sunday schedule-row-to-saturday" />
                        <div className="grid time-from-ef time-to-et schedule-row-from-sunday schedule-row-to-saturday" />
                        <div className="grid time-from-et time-to-eff schedule-row-from-sunday schedule-row-to-saturday" />
                        <div className="grid time-from-eff time-to-n schedule-row-from-sunday schedule-row-to-saturday" />
                        <div className="grid time-from-n time-to-nf schedule-row-from-sunday schedule-row-to-saturday" />
                        <div className="grid time-from-nf time-to-nt schedule-row-from-sunday schedule-row-to-saturday" />
                        <div className="grid time-from-nt time-to-nff schedule-row-from-sunday schedule-row-to-saturday" />
                        <div className="grid grid-last time-from-nff time-to-nff schedule-row-from-sunday schedule-row-to-saturday" />
                        {/*   ./Grid Rows*/}
                        <div className="grid schedule-sunday time-from-s time-to-nff" />
                        <div className="grid grid-last schedule-sunday time-from-nff time-to-nff" />
                        <div className="grid schedule-monday time-from-s time-to-nff" />
                        <div className="grid grid-last schedule-monday time-from-nff time-to-nff" />
                        <div className="grid schedule-tuesday time-from-s time-to-nff" />
                        <div className="grid grid-last schedule-tuesday time-from-nff time-to-nff" />
                        <div className="grid schedule-wednesday time-from-s time-to-nff" />
                        <div className="grid grid-last schedule-wednesday time-from-nff time-to-nff" />
                        <div className="grid schedule-thursday time-from-s time-to-nff" />
                        <div className="grid grid-last schedule-thursday time-from-nff time-to-nff" />
                        <div className="grid schedule-friday time-from-s time-to-nff" />
                        <div className="grid grid-last schedule-friday time-from-nff time-to-nff" />
                        <div className="grid schedule-saturday time-from-s time-to-nff" />
                        <div className="grid grid-last schedule-saturday time-from-nff time-to-nff" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* Row End */}
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
          {/* Add Schedule*/}
          <div className="modal fade" id="depadd" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title  fw-bold" id="depaddLabel"> Schedule Add</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div className="deadline-form">
                    <form>
                      <div className="row g-3 mb-3">
                        <div className="col-sm-6">
                          <label htmlFor="depone" className="form-label">Schedule Day</label>
                          <input type="text" className="form-control" id="depone" />
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="deptwo" className="form-label">Schedule Time</label>
                          <input type="time" className="form-control" id="deptwo" />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Schedule Note</label>
                    <textarea className="form-control" rows={3} defaultValue={""} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button>
                  <button type="submit" className="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
          </div>  
        </div> 
      </div>
    )
  }
}

export default cal
