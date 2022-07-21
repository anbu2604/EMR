import React, { useState, } from 'react';
import { useNavigate } from "react-router-dom";
import '../address/Address.styles.css';
import {
    
    PersonFill,
    Flag,
    House,
    HouseDoor,
    Map,
    PinMapFill,
    GeoAltFill,
    Bank,
    Globe,
} from 'react-bootstrap-icons';


export function Address() {



    return (

        <div className="container-fluid over vh-100 ">
            <div className="row">
                {/* *******when we added the side bar********* */}
                {/* <div className="col-sm-1 vh-100 side"> </div> */}

                <div className="col-sm-8 px-0 offset-sm-2 min-vh-100 user-content">

                    <div className="user-content1">
                        <ul className="px-0 userul">

                            <li className="user" >User </li>
                            <li className="business" >Business</li>
                            <li className="services" >Services</li>
                            <li className="confirmation" >Confirmation</li>
                            <li className="confi" >
                                <i><PersonFill size={25} /></i>
                                <i className="mx-3"><Flag size={25} /></i>


                            </li>


                        </ul>

                    </div>

                    <h3 className="text-center fw-bold">Address Details
                    </h3>

                    <form >
                        <div className="row g-5 justify-content-center">
                            <div className="col-sm-5">
                                <label className="control-label headtxt " >Address Line 1</label>
                                <div className="input-group">
                                    <div className="input-group-addon address-icon" >
                                        <i ><House size={25} /></i>
                                    </div>
                                    <input className="form-control address-input "
                                         name="address 2" placeholder="Enter Your Address" type="text" />
                                </div>
                                <label className="control-label" >Apartment,suite,unit,building,floor,etc</label>

                            </div>


                            {/* <div className="last-name col-sm-5">   
                  <label className="control-label headtxt " >Last Name</label>
                  <div className="input-group">
                    <div className="input-group-addon address-icon" >
                      <i ><PersonFill size={25} /></i>
                    </div>
                    <input className="form-control address-input" value={lastName}
                      onChange={(e) => setLastName(e.target.value)}  name="last name" placeholder="Enter Last Name" type="text" />
                  </div>  
              </div> */}

                            <div className="col-sm-5">
                                <label className="control-label headtxt " >Address Line 2</label>
                                <div className="input-group">
                                    <div className="input-group-addon address-icon" >
                                        <i ><HouseDoor size={25} /></i>
                                    </div>
                                    <input className="form-control address-input"  name="address 1" placeholder="Enter Your Address" type="text" />

                                </div>
                                <label className="control-label" >Street address,p.o,box,company name,c/o</label>

                            </div>

                            {/* <div className="select-role col-sm-5">
                <div className="form-group">
                  <label className="control-label headtxt " >Select Distributer</label>
                  <div className="input-group">
                    <div className="input-group-addon address-icon" >
                      <i ><PeopleFill size={25} /></i>
                    </div>
                    <input className="form-control address-input" list="browsers" value={selectDis}
                      onChange={(e) => setSelectDis(e.target.value)} name="browser"  placeholder="Select distributer" />
                    <datalist id="browsers">
                      <option value="Master distributer " />
                      <option value="Super distributer" />

                    </datalist>
                  </div>   
              </div>  */}

                            <div className="col-sm-5">
                                <label className="control-label headtxt " >Land mark</label>
                                <div className="input-group">
                                    <div className="input-group-addon address-icon" >
                                        <i ><Map size={25} /></i>
                                    </div>
  
                                    <input className="form-control address-input" 
                                        name="lamd-mark" placeholder="Enter Your Lank mark" type="text" />
                                </div>
                            </div>


                            <div className="col-sm-5">
                                <label className="control-label headtxt " >Pincode</label>
                                <div className="input-group">
                                    <div className="input-group-addon address-icon" >
                                        <i ><PinMapFill size={25} /></i>
                                    </div>
                                    <input className="form-control address-input"
                                         name="Pincode" placeholder="Enter Your Pincode" type="number" />
                                </div>
                            </div>

                            <div className="col-sm-5">
                                <label className="control-label headtxt " >District</label>
                                <div className="input-group">
                                    <div className="input-group-addon address-icon" >
                                        <i ><GeoAltFill size={25} /></i>
                                    </div>
                                    <input className="form-control address-input"
                                         name="district" placeholder="Enter Your District" type="text" />
                                </div>
                            </div>

                            <div className="col-sm-5">
                                <label className="control-label headtxt " >State</label>
                                <div className="input-group">
                                    <div className="input-group-addon address-icon" >
                                        <i ><Bank size={25} /></i>
                                    </div>
                                    <input className="form-control address-input"
                                         name="State" placeholder="Enter Your State" type="text" />
                                </div>
                            </div>

                            <div className="col-sm-5">
                                <label className="control-label headtxt " >Country</label>
                                <div className="input-group">
                                    <div className="input-group-addon address-icon" >
                                        <i ><Globe size={25} /></i>
                                    </div>
                                    <input className="form-control address-input"
                                         name="Country" placeholder="Enter Your Country" type="text" />
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">

                                    <div className="col-sm-7 d-flex justify-content-center">
                                        <button type="button" className="addressbtn"><a className="linkbtn" href="/bank">Next</a></button>
                                        {/* <a href="/login">jgyiioj</a> */}
                                    </div>

                                    <div className="col-sm-3 d-flex justify-content-center ">
                                        <button type="button" className="addressbtn">Back</button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </form>
                </div>








            </div>

        </div>



    );
}

