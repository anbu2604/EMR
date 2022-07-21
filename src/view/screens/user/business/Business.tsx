import React, { useState, } from 'react';
import { useNavigate } from "react-router-dom";
import '../business/Business.styles.css';
import {
    PersonFill, Flag,  EnvelopeFill, PhoneFill, PostcardFill,
} from 'react-bootstrap-icons';


export function Business() {



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

                    <h3 className="text-center fw-bold">Business Details
                    </h3>

                    <form >
                        <div className="row g-5 justify-content-center">
                            <div className="col-sm-5">
                                <label className="control-label headtxt " >Business Name</label>
                                <div className="input-group">
                                    <div className="input-group-addon business-icon" >
                                        <i ><PersonFill size={25} /></i>
                                    </div>
                                    <input className="form-control business-input "
                                        name="business" placeholder="Enter Your Business Name" type="text" />
                                </div>

                            </div>



                            <div className="col-sm-5">
                                <label className="control-label headtxt " >Business e-mail</label>
                                <div className="input-group">
                                    <div className="input-group-addon business-icon" >
                                        <i ><EnvelopeFill size={25} /></i>
                                    </div>
                                    <input className="form-control business-input" name="Business e-mail" placeholder="Enter Your Business e-mail" type="text" />

                                </div>

                            </div>



                            <div className="mobile-no col-sm-5">
                                <label className="control-label " id="head-txt">Mobile Number</label>
                                <div className="input-group">
                                    <div className="input-group-addon business-icon " >
                                        <i ><PhoneFill size={25} /></i>
                                    </div>
                                    <div className="input-group-addon business-icon mx-1" >
                                        <h6>+91</h6>
                                    </div>
                                    <input className="form-control business-input mx-0"
                                        name="Mobile-Number" placeholder="Enter Your Mobile Number" type="number" />
                                </div>
                            </div>


                            <div className="col-sm-5">
                                <label className="control-label headtxt " >GST Number</label>
                                <div className="input-group">
                                    <div className="input-group-addon business-icon" >
                                        <i ><PostcardFill size={25} /></i>
                                    </div>
                                    <input className="form-control business-input"
                                        name="GST" placeholder="Enter Your GSt Number" type="text" />
                                </div>
                            </div>







                            <div className="container">
                                <div className="row">

                                    <div className="col-sm-7 d-flex justify-content-center">
                                        <button type="button" className="businessbtn"><a className="linkbtn" href="/bisbankdetails">Next</a></button>
                                        {/* <a href="/login">jgyiioj</a> */}
                                    </div>

                                    <div className="col-sm-3 d-flex justify-content-center ">
                                        <button type="button" className="businessbtn">Back</button>
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

