
import React, { useState, useRef } from "react";

import '../user/User.styles.css'
import '../../components/forminput/Form.styles.css'
import validation from "../../../utils/validation";
import {
  PersonFill,
  Flag,
  Phone,
} from 'react-bootstrap-icons';
import Useform from "../../../modal/redux/system/useform";



export default function User() {

  const { handlechange, values, handlesubmit, errors, } = Useform(validation);

  console.log(values)
  return (


    <div className="container-fluid main ">

      <div className="row">
        <div className="col-8 offset-2 first px-0">

          <div className=" form-navbar">
            <ul className="form-ul">

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
        </div>
      </div>





      <div className="row ">
        <div className=" second px-0  col-8 offset-2 ">

          <form className="form " onSubmit={handlesubmit} noValidate>

            <div className="row container form-content px-0  g-5 justify-content-evenly">
              <h3 className="text-center head-text fw-bold">USER DETAILS
              </h3>

              <div className=" one col-sm-5">

                <label className="form-label" htmlFor="username">User Name<span>*</span></label>

                <input
                  placeholder="&#xf007;&nbsp;&nbsp;enter your name"
                  value={values.username}
                  name="username"
                  type="name"
                  onChange={handlechange}
                  id="username"
                  className="form-input"

                />
                {errors.username && <p>{errors.username}</p>}
              </div>


              <div className=" col-sm-5">

                <label className="form-label" htmlFor="useremail">E-mail<span>*</span></label>

                <input

                  placeholder="&#xf0e0;&nbsp;&nbsp;enter your e-mail"
                  value={values.useremail}
                  name="useremail"
                  type="email"
                  onChange={handlechange}
                  id="useremail"
                  className="form-input"
                />
                {errors.useremail && <p>{errors.useremail}</p>}

              </div>


              <div className=" one col-sm-5">

                <label className="form-label" htmlFor="mobileno">Mobile Number<span>*</span></label>

                <input
                  placeholder="&#xf007;&nbsp;&nbsp;enter your mobile no"
                  value={values.mobileno}
                  name="mobileno"
                  type="number"
                  onChange={handlechange}
                  id="mobileno"
                  className="form-input"

                />
                {errors.mobileno && <p>{errors.mobileno}</p>}
              </div>


              <div className=" col-sm-5">

                <label className="form-label" htmlFor="userpassword">Password<span>*</span></label>

                <input

                  placeholder="&#xf023;&nbsp;&nbsp;enter your Password"
                  value={values.userpassword}
                  name="userpassword"
                  type="password"
                  onChange={handlechange}
                  id="userpassword"
                  className="form-input"
                />
                {errors.userpassword && <p>{errors.userpassword}</p>}

              </div>




              <div className=" col-sm-5">

                <label className="form-label" htmlFor="confirmpassword">confirm password<span>*</span></label>

                <input

                  placeholder="&#xf023;&nbsp;&nbsp;confirm-password"
                  value={values.confirmpassword}
                  name="confirmpassword"
                  type="password"
                  onChange={handlechange}
                  id="confirmpassword"
                  className="form-input"
                />
                {errors.confirmpassword && <p>{errors.confirmpassword}</p>}

              </div>


              <div className="col-sm-5"></div>

              <div className="col-sm-5"></div>

              <div className=" col-sm-5"></div>



              <div className="container">
                <div className="row">

                  <div className="col-sm-7 d-flex justify-content-center">
                    <button type="submit" className="form-input-btn"><a href="/address">Next</a></button>
                  </div>

                  <div className="col-sm-3 d-flex justify-content-center ">
                    <button type="button" className="form-input-btn"><a href="/dashboard">Back</a></button>
                  </div>
                </div>

              </div>


            </div>
          </form>
        </div>
      </div>






    </div>
  )
}


