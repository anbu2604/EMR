import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.styles.css";
import {
  Envelope,
  EnvelopeFill,
  Lock,
  LockFill,
  PhoneFill,
  ShieldLockFill,
} from "react-bootstrap-icons";

const Login = () => {
  const navigate = useNavigate();
  const [phoneno, setPhoneno] = useState("");
  const [Pinnumber, setPinnumber] = useState("");

  const handleSubmit = () => {
    sessionStorage.setItem("phoneno", phoneno);
    sessionStorage.setItem("Pinnumber", Pinnumber);
    localStorage.setItem("phoneno", phoneno);
    localStorage.setItem("Pinnumber", Pinnumber);
    console.log("phoneno----->", phoneno);
    console.log("Pinnumber----->", Pinnumber);

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

          <div className="loginimg">
            <img src="https://www.medindia.net/mob-light/images/login.png" />{" "}
          </div>
        </div>
        <div className="col-xs-11 vh-100 logincontent d-flex align-items-center justify-content-center col-md-6">
          <div className="login-content mt-15">
            <form onSubmit={handleSubmit}>
              <img
                className="loginuserimg"
                src="https://business.ucr.edu/media/26/download?attachment"
              />
              <p className="title fw-bolder mt-4">LOGIN</p>

              <div className="div">
                <div className="input-group mt-4">
                  <div className="input-group-addon  mt-3">
                    <i className="forgoticon">
                      <EnvelopeFill size={25} />
                    </i>
                  </div>
                  <input
                    className="forgotinput mx-2"
                    value={phoneno}
                    onChange={(e) => setPhoneno(e.target.value)}
                    name="email"
                    placeholder="Enter Your e-mail"
                    type="e"
                  />
                </div>

                <div className="input-group mt-4">
                  <div className="input-group-addon   mt-3">
                    <i className="forgoticon">
                      <PhoneFill size={25} />
                    </i>
                  </div>
                  <input
                    className="forgotinput mx-2"
                    type="number"
                    value={Pinnumber}
                    onChange={(e) => setPinnumber(e.target.value)}
                    placeholder="Enter YourNUmber"
                  />
                </div>
              </div>
            </form>

            <div className="row d-flex justify-content-center">
              <a className="forgot  fw-bolder mx-3 mt-3" href="/forgot">
                Forgot Password
              </a>

              <button type="button" className="forgotbtn mt-3 ">
                <a className="forgotlinkbtn" href="/dashboard">
                  Submit
                </a>
              </button>
            </div>
            <p className=" pt-3 fs-5">
              {" "}
              New here?
              <a className="forgot  fw-bolder mx-3 " href="/signup">
                Sign Up.{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
