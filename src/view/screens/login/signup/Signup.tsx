import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.styles.css";
import {
  Envelope,
  EnvelopeFill,
  Lock,
  LockFill,
  PhoneFill,
  ShieldLockFill,
} from "react-bootstrap-icons";

const Signup = () => {
  const navigate = useNavigate();
  const [phoneno, setPhoneno] = useState("");
  const [OTP, setOTP] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("phoneno", phoneno);
    localStorage.setItem("OTP", OTP);
    console.log("phoneno----->", phoneno);
    console.log("OTP----->", OTP);

    // console.log("text----->",m)
  };
  return (
    <div className="container-fluid logindiv">
      <div className="row">
        <div className="col-sm-0 vh-100 px-0 col-lg-6">
          <img
            className="wave"
            src="https://www.recombd.com/self-services/img/wave.png"
          />

          <div className="signupimg">
            <img src="https://stories.freepiklabs.com/storage/13490/mobile-login-rafiki-778.png" />
          </div>
        </div>
        <div className="col-xs-11 vh-100 logincontent d-flex align-items-center justify-content-center col-md-6">
          <div className="login-content mt-15">
            <form onSubmit={handleSubmit}>
              <img
                className="signupuserimg"
                src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
              />

              <p className="title fw-bolder">SIGN UP</p>

              <div className="div">
                <div className="input-group ">
                  <div className="input-group-addon  mt-3">
                    <i className="reseticon">
                      <PhoneFill size={25} />
                    </i>
                  </div>
                  <input
                    className="resetinput mx-2"
                    value={phoneno}
                    onChange={(e) => setPhoneno(e.target.value)}
                    name="Old password"
                    placeholder="Old Password"
                    type="text"
                  />
                </div>

                <div className="input-group ">
                  <div className="input-group-addon   mt-3">
                    <i className="reseticon">
                      <Lock size={25} />
                    </i>
                  </div>
                  <input
                    className="resetinput mx-2"
                    type="number"
                    value={OTP}
                    onChange={(e) => setOTP(e.target.value)}
                    placeholder="New Password"
                  />
                </div>
              </div>
            </form>
            <div className="row d-flex justify-content-center">
              <button type="button" className="forgotbtn ">
                <a className="forgotlinkbtn" href="#">
                  Submit
                </a>
              </button>
            </div>
            <p className=" fs-5">
              {" "}
              Already have an account?
              <a className="forgot  fw-bolder mx-3 " href="/ui">
                Log In.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
