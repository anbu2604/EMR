import React from 'react';
import './Dash.styles.css';
import {
  LockFill,
  PersonFill,
  Person,
  EnvelopeFill,
  PhoneFill,
  PeopleFill,
  TelephoneFill,
  Flag,
  LayoutSidebar,
  Building,
} from 'react-bootstrap-icons';
export function Dashboard() {
  return (


    //     <div class="container">
    //     <div class="row">
    //         <div class="col-lg-1"></div>
    //         <div class="col-lg-11"></div>
    //     </div>
    // </div>
    <div className="container-fluid">
      <div className="row">
        <div className=" col-lg-1 sidebar ">


          <ul className="dropend">


            <li> <a href="#" className="dropdown-toggle mx-4 ">
              <i className="color"><PersonFill size={40} /></i>
            </a>
            </li>

            <li className="one"> <a href="#" className="dropdown-toggle mx-4 ">
              <i className="color"><Building size={40} /></i>
            </a>
              <ul className="product">
                <li><a className="hov" href="/ui">Calender</a></li>
                <li><a className="hov" href="/user">user register</a></li>
                <li><a href="#" className="dropdown-toggle hov">services</a>
                  <ul className="das-services">
                    <li><a className="hov" href="#">money transfer</a></li>

                    <li><a href="#" className="dropdown-toggle hov">recharge</a>
                      <ul className="two">
                        <li><a className="hov" href="#">mobile recharge</a></li>
                        <li><a className="hov" href="#">DTH recharge</a></li>
                        <li><a className="hov" href="#">Phone recharge</a></li>
                      </ul>
                    </li>



                    <li><a className="hov" href="#">adimn</a></li>
                  </ul>
                </li>
              </ul>
            </li>


          </ul>


        </div>
        <div className=" col-lg-11 maincontent">
          <h1 className="text-center fw-bolder px-0" >DASHBOARD</h1>

        </div>
      </div>

    </div>
  );
}
