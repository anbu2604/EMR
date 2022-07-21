import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Reset.styles.css';
import { Envelope, EnvelopeFill, Lock, LockFill, PhoneFill, ShieldLockFill, } from 'react-bootstrap-icons';

const Reset = () => {
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
                    <img className="wave" src="https://www.recombd.com/self-services/img/wave.png" />

                    <div className="resetimg">
                        <img src="https://cdn.shopify.com/s/files/1/0589/0978/6283/files/Vector_Smart_Object_2_480x480.png?v=1631880795" />
                    </div>

                </div>
                <div className="col-xs-11 vh-100 logincontent d-flex align-items-center justify-content-center col-md-6">

                    <div className="login-content mt-15">
                        <form onSubmit={handleSubmit}>

                            <img className="resetuserimg" src="https://zazuapp.org/images/package-icons/password.png" />

                            <p className="title fw-bolder mt-4">RESET PASSWORD</p>

                            <p> Enter Your New password here</p>
                            <div className="div">

                                <div className="input-group mt-4">
                                    <div className="input-group-addon  mt-3">
                                        <i className="reseticon" ><PhoneFill size={25} /></i>
                                    </div>
                                    <input className="resetinput mx-2" value={phoneno}
                                        onChange={(e) => setPhoneno(e.target.value)} name="Old password" placeholder="Old Password" type="text" />

                                </div>

                                <div className="input-group mt-4">
                                    <div className="input-group-addon   mt-3">
                                        <i className="reseticon" ><Lock size={25} /></i>
                                    </div>
                                    <input className="resetinput mx-2"
                                        type="number"
                                        value={OTP}
                                        onChange={(e) => setOTP(e.target.value)}
                                        placeholder="New Password"
                                    />
                                </div>


                                <div className="input-group mt-4">
                                    <div className="input-group-addon  mt-3">
                                        <i className="reseticon" ><LockFill size={25} /></i>
                                    </div>
                                    <input className="resetinput mx-2" value={phoneno}
                                        onChange={(e) => setPhoneno(e.target.value)} name="Confirm password" placeholder="Confirm Password" type="text" />

                                </div>


                            </div>






                        </form>
                        <div className="row d-flex justify-content-center">

                            <button type="button" className="forgotbtn mt-4 "><a className="forgotlinkbtn" href="#">Submit</a></button>

                        </div>
                        <p className=" pt-3 fs-5">  New here?<a className="forgot  fw-bolder mx-3 " href="/signup">Sign Up. </a></p>
                        <p className=" fs-5">  Already have an account?<a className="forgot  fw-bolder mx-3 " href="/login">Log In.</a></p>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Reset;
