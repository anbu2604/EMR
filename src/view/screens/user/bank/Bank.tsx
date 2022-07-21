import React, { useState, } from 'react';
import { useNavigate } from "react-router-dom";
import '../bank/Bank.styles.css';
import {PersonFill, Flag,House, HouseDoor,Map,PinMapFill,
    GeoAltFill,  Globe, Bank2, SortNumericDownAlt, Medium, Bullseye, Building, Globe2,
} from 'react-bootstrap-icons';


export function Bank() {



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

                    <h3 className="text-center fw-bold">Bank Details
                    </h3>

                    <form >
                        <div className="row g-5 justify-content-center">
                            <div className="col-sm-5">
                                <label className="control-label headtxt " >Bank Name</label>
                                <div className="input-group">
                                    <div className="input-group-addon bank-icon" >
                                        <i ><Bank2 size={25} /></i>
                                    </div>
                                    <input className="form-control bank-input "
                                         name="bank" placeholder="Enter Your Bank Name" type="text" />
                                </div>

                            </div>


                            {/* <div className="last-name col-sm-5">   
                  <label className="control-label headtxt " >Last Name</label>
                  <div className="input-group">
                    <div className="input-group-addon bank-icon" >
                      <i ><PersonFill size={25} /></i>
                    </div>
                    <input className="form-control bank-input" value={lastName}
                      onChange={(e) => setLastName(e.target.value)}  name="last name" placeholder="Enter Last Name" type="text" />
                  </div>  
              </div> */}

                            <div className="col-sm-5">
                                <label className="control-label headtxt " >Account Number</label>
                                <div className="input-group">
                                    <div className="input-group-addon bank-icon" >
                                        <i ><SortNumericDownAlt size={25} /></i>
                                    </div>
                                    <input className="form-control bank-input"  name="Account Number" placeholder="Enter Your Account Number" type="number" />

                                </div>

                            </div>

                            {/* <div className="select-role col-sm-5">
                <div className="form-group">
                  <label className="control-label headtxt " >Select Distributer</label>
                  <div className="input-group">
                    <div className="input-group-addon bank-icon" >
                      <i ><PeopleFill size={25} /></i>
                    </div>
                    <input className="form-control bank-input" list="browsers" value={selectDis}
                      onChange={(e) => setSelectDis(e.target.value)} name="browser"  placeholder="Select distributer" />
                    <datalist id="browsers">
                      <option value="Master distributer " />
                      <option value="Super distributer" />

                    </datalist>
                  </div>   
              </div>  */}

                            <div className="col-sm-5">
                                <label className="control-label headtxt " >IFSC</label>
                                <div className="input-group">
                                    <div className="input-group-addon bank-icon" >
                                        <i ><Medium size={25} /></i>
                                    </div>
  
                                    <input className="form-control bank-input" 
                                        name="IFSC" placeholder="Enter Your IFSC number" type="text" />
                                </div>
                            </div>


                            <div className="col-sm-5">
                                <label className="control-label headtxt " >Branch</label>
                                <div className="input-group">
                                    <div className="input-group-addon bank-icon" >
                                        <i ><Building size={25} /></i>
                                    </div>
                                    <input className="form-control bank-input"
                                         name="Branch" placeholder="Enter Your Branch Name" type="text" />
                                </div>
                            </div>

                            <div className="col-sm-5">
                                <label className="control-label headtxt " >City</label>
                                <div className="input-group">
                                    <div className="input-group-addon bank-icon" >
                                        <i ><Globe2 size={25} /></i>
                                    </div>
                                    <input className="form-control bank-input"
                                         name="City" placeholder="Enter Your City" type="text" />
                                </div>
                            </div>

                            <div className="col-sm-5">
                                <label className="control-label headtxt " >District</label>
                                <div className="input-group">
                                    <div className="input-group-addon bank-icon" >
                                        <i ><Globe size={25} /></i>
                                    </div>
                                    <input className="form-control bank-input"
                                         name="district" placeholder="Enter Your District" type="text" />
                                </div>
                            </div>

                           

                           

                            <div className="container">
                                <div className="row">

                                    <div className="col-sm-7 d-flex justify-content-center">
                                        <button type="button" className="bankbtn"><a className="linkbtn" href="/business">Next</a></button>
                                        {/* <a href="/login">jgyiioj</a> */}
                                    </div>

                                    <div className="col-sm-3 d-flex justify-content-center ">
                                        <button type="button" className="bankbtn">Back</button>
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

