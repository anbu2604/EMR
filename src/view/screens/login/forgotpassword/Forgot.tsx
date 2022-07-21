import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Forgot.styles.css';
import { Envelope, EnvelopeFill, Lock, LockFill, PhoneFill, ShieldLockFill, } from 'react-bootstrap-icons';


const Forgot = () => {
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
                    <img className="wave" src="https://www.recombd.com/self-services/img/wave.png" />

                    <div className="forgotimg">
                        <img src="https://scpmarts.in/pub/static/frontend/Scpmarts/default/en_US/images/forgetpassword-bg.png" />
                    </div>

                </div>
                <div className="col-xs-11 vh-100 logincontent d-flex align-items-center justify-content-center col-md-6">

                    <div className="login-content mt-15">
                        <form onSubmit={handleSubmit}>

                            <img className="forgotuserimg" src="https://chemprolab.com/images/password-icon.png.gif" />

                            <p className="title fw-bolder mt-4">FORGOT PASSWORD</p>

                            <p> Enter Your Number to reset your password</p>
                            <div className="div">

                                <div className="input-group mt-4">
                                    <div className="input-group-addon  mt-3">
                                        <i className="forgoticon" ><PhoneFill size={25} /></i>
                                    </div>
                                    <input className="forgotinput mx-2" value={phoneno}
                                        onChange={(e) => setPhoneno(e.target.value)} name="phoneno" placeholder="Phone Number" type="number" />

                                </div>

                                <div className="input-group mt-4">
                                    <div className="input-group-addon   mt-3">
                                        <i className="forgoticon" ><ShieldLockFill size={25} /></i>
                                    </div>
                                    <input className="forgotinput mx-2"
                                        type="number"
                                        value={Pinnumber}
                                        onChange={(e) => setPinnumber(e.target.value)}
                                        placeholder="OTP"
                                    />

                                </div>


                            </div>






                        </form>
                        <div className="row d-flex justify-content-center">

                            <button type="button" className="forgotbtn mt-4 "><a className="forgotlinkbtn" href="/reset">Submit</a></button>

                        </div>
                        <p className=" pt-3 fs-5">  New here?<a className="forgot  fw-bolder mx-3 " href="/signup">Sign Up. </a></p>
                        <p className=" fs-5">  Already have an account?<a className="forgot  fw-bolder mx-3 " href="/login">Log In.</a></p>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Forgot;
