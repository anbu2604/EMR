import { React } from "react";
import { Hospital } from "react-bootstrap-icons";
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";
import  { useState } from "react";
import { Slider } from "@material-ui/core";

function Medical_record() {
  const temperature = [
    {
      value: 0,
      label: "0°C",
    },
       {
      value: 50,
      label: "50°C",
    },
       {
      value: 100,
      label: "100°C",
    },
  ];
  const [val, setVal] = useState([0, 40]);
  const updateRange = (e, data) => {
    setVal(data);
  };
  const bmi = [
    {
      value: 0,
      label: "0",
    },
       {
      value: 50,
      label: "50",
    },
       {
      value: 100,
      label: "100",
    },
  ];
  const [value, setValue] = useState([0, 40]);
  const updateValue = (e, data) => {
    setValue(data);
  };
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-9">
        <Admin></Admin>
        <div className="col-lg-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      aria-current="page"
                      href="./medical_report"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./history">
                      History
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./report">
                      Report
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./eye_module">
                      Documents
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="./transaction">
                      Transactions
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Ledger
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className=" row col-12">
            <div className="col-8">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Billing
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Patient Balance Due
                        </label>

                        <label class="form-group col-lg-2 col-md-3 col-sm-12 ">
                          -25.00
                        </label>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Insurance Balance Due
                        </label>

                        <label class="form-group col-lg-2 col-md-3 col-sm-12 ">
                          175.00
                        </label>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Total Balance Due
                        </label>

                        <label class="form-group col-lg-2 col-md-3 col-sm-12 ">
                          150.00
                        </label>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Primary Insurance
                        </label>

                        <label class="form-group col-lg-2 col-md-3 col-sm-12 ">
                          Aekna
                        </label>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-4 col-sm-12">
                          Effective Date
                        </label>

                        <label class="form-group col-lg-2 col-md-3 col-sm-12 ">
                          2012-02-08
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Demographics
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <div class="container">
                          <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">
                              <a
                                class="navbar-brand"
                                href="#who"
                                data-bs-toggle="collapse"
                                aria-controls="collapseExample"
                              >
                                Who
                              </a>
                              <a
                                class="navbar-brand"
                                href="#contact"
                                data-bs-toggle="collapse"
                                aria-controls="collapseExample"
                              >
                                Contact
                              </a>
                              <a
                                class="navbar-brand"
                                href="#choices"
                                data-bs-toggle="collapse"
                              >
                                Choices
                              </a>
                              <a
                                class="navbar-brand"
                                href="#employer"
                                data-bs-toggle="collapse"
                              >
                                Employer
                              </a>
                              <a
                                class="navbar-brand"
                                href="#stats"
                                data-bs-toggle="collapse"
                              >
                                Stats
                              </a>
                              <a
                                class="navbar-brand"
                                href="#misc"
                                data-bs-toggle="collapse"
                              >
                                Misc
                              </a>
                              <a
                                class="navbar-brand"
                                href="#guardian"
                                data-bs-toggle="collapse"
                              >
                                Guardian
                              </a>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div className="collapse" id="who" aria-expanded="false">
                        <div className="container">
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Name:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              <i class="icofont-warning-alt m-1 p-1"></i>Phil
                              Belford
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              External ID:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              1
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              DOB:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              1972-02-09
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Sex :
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              male
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              S.S
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              333222333
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              License/ID:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 "></label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Marital Status:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Single
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              User Defined:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 "></label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Billing Note:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 "></label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Gender Identity:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              <i class="icofont-warning-alt m-1 p-1"></i>
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Sexual Orientation:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              <i class="icofont-warning-alt m-1 p-1"></i>
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Birth Name:
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Previous Names:
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="collapse"
                        id="contact"
                        aria-expanded="false"
                      >
                        <div className="container">
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Address:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              6666 String Street
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Address Line 2:
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              City:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Longview
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              State:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Florida
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Postal Code:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              44433
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Country:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              USA
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Mother`s Name:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Gardner
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Emergency Contact:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Wilma
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Emergency Phone:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              222-333-4444
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Home Phone:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              333-444-2222
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Work Phone:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              555-444-3333
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Mobile Phone:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              222-444-2222
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Contact Email:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              heya@invalid.email.com
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Trusted Email:
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              County:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              <i class="icofont-warning-alt m-1 p-1"></i>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="collapse"
                        id="choices"
                        aria-expanded="false"
                      >
                        <div className="container">
                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Provider:
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Billy Smith
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Referring Provider:
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Pharmacy:
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              HIPAA Notice Received:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              YES
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Allow Voice Message:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              YES
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Leave Message With:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Phil
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Allow Mail Message:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              YES
                            </label>
                          </div>

                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Allow SMS:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              YES
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Allow Email:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              YES
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Allow Immunization Registry Use:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              YES
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Allow Immunization Info Sharing:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              YES
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Allow Health Information Exchange:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              YES
                            </label>
                            <label className="col-md-3 col-lg-3 col-sm-12 ">
                              Allow Patient Portal:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              YES
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              CMS Portal Login:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 "></label>
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Immunization Registry Status :
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              <i class="icofont-warning-alt m-1 p-1"></i>
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Immunization Registry Status Effective Date:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 "></label>
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Publicity Code:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              <i class="icofont-warning-alt m-1 p-1"></i>
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Publicity Code Effective Date:{" "}
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 "></label>
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Protection Indicator:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              <i class="icofont-warning-alt m-1 p-1"></i>
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Protection Indicator Effective Date:{" "}
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 "></label>
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Care Team (Provider):
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 "></label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Care Team (Facility):{" "}
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 "></label>
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Care Team Status:
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 ">
                              Active
                            </label>
                          </div>
                          <div className="row">
                            <label className="col-md-3 col-lg-4 col-sm-12 ">
                              Patient Categories:{" "}
                            </label>
                            <label className="col-md-3 col-lg-2 col-sm-12 "></label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="collapse"
                      id="employer"
                      aria-expanded="false"
                    >
                      <div className="container">
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Occupation:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Pen User
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Employer Name:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Using Pens Inc.
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Employer Address:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            23344 Watchahee Road
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Employer Address Line 2:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 "></label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            City:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Longview
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            State:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Florida
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Postal Code:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            444333
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Country:{" "}
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            USA
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Industry:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            <i class="icofont-warning-alt m-1 p-1"></i>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="collapse" id="stats" aria-expanded="false">
                      <div className="container">
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Language:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            English
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Ethnicity:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Not Hispanic or Latino
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Race:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            White
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Family Size:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 "></label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Financial Review Date:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            0000-00-00 00:00:00
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Monthly Income:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Homeless, etc.
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Interpreter:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 "></label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Migrant/Seasonal:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 "></label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Referral Source:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            <i class="icofont-warning-alt m-1 p-1"></i>
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            VFC:{" "}
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            <i class="icofont-warning-alt m-1 p-1"></i>
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Religion:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            <i class="icofont-warning-alt m-1 p-1"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="collapse" id="misc" aria-expanded="false">
                      <div className="container">
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Date Deceased:
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            0000-00-00
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Reason Deceased:
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="collapse" id="guardian" aria-expanded="false">
                      <div className="container">
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                            Name:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 "></label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Relationship:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            <i class="icofont-warning-alt m-1 p-1"></i>
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Sex:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                          <i class="icofont-warning-alt m-1 p-1"></i>
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                          Address:	
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          City:	
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          State:	
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          <i class="icofont-warning-alt m-1 p-1"></i>
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          Postal Code:		
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          Country:	
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          <i class="icofont-warning-alt m-1 p-1"></i>
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          Phone:		
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          Work Phone:	
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          Email:		
                          </label>
                          <label className="col-md-3 col-lg-3col-sm-12 ">
                          </label>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Insurance
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row col-7">
                        <div class="container">
                          <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">
                              <a
                                class="navbar-brand col-lg-2"
                                href="#primary"
                                data-bs-toggle="collapse"
                                aria-controls="collapseExample"
                              >
                                Primary
                              </a>
                              <a
                                class="navbar-brand col-3"
                                href="#eligibility"
                                data-bs-toggle="collapse"
                                aria-controls="collapseExample"
                              >
                                Eligibility
                              </a>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div
                        className="collapse"
                        id="primary"
                        aria-expanded="false"
                      >
                        <div className="row">
                          <label className="col-md-3 col-lg-12 col-sm-12 text-success">
                            Primary Insurance from 2012-02-08 until Present
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Insurer
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Subscriber
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Subscriber Employer
                          </label>
                        </div>

                        <div className="row">
                          <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                            Aekna
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 fw-bold ">
                            Phil Belford(Self)
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                            Using Pens Inc.
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            4345 Donkey Road
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12  ">
                            6666String Street
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            23344 Watchahee Road
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Lonview FL,4433
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12  ">
                            Lonview FL,44433 USA
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Lonview FL,444333 USA
                          </label>
                        </div>
                        <div className="row">
                          <label className="col-md-3 col-lg-8 col-sm-12 text-center">
                            S.S 333222333
                          </label>
                          <label className="col-md-3 col-lg-8 col-sm-12 text-center">
                            D.O.B 1972-02-09
                          </label>
                          <label className="col-md-3 col-lg-8 col-sm-12 text-center">
                            Phone 333-444-2222
                          </label>
                        </div>
                        <div className="row ">
                          <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                            PLan Name:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Bad Plan
                          </label>

                          <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                            Copay:
                          </label>
                        </div>
                        <hr></hr>
                        <div className="row ">
                          <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                            Policy Number:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            555
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                            Accepts Assignment:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            Yes
                          </label>
                        </div>
                        <hr className="col-6"></hr>
                        <div className="row ">
                          <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                            Group Number:
                          </label>
                          <label className="col-md-3 col-lg-3 col-sm-12 ">
                            444{" "}
                          </label>
                        </div>
                      </div>
                      <div
                        className="collapse"
                        id="eligibility"
                        aria-expanded="false"
                      >
                        <label className="fw-bold">Nothing To Report</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Messages
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row float-end">
                        <a href="./message_form">
                          <i class="icofont-ui-edit "></i>
                        </a>
                      </div>
                      <div className="row">
                        <label>
                          There are no messages on file for this patient. To add
                          messages, please click here.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Patient Reminders
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row float-end">
                        <a href="./patient_reminder">
                          <i class="icofont-ui-edit "></i>
                        </a>
                      </div>
                      <div className="row">
                        <label>No active patient reminders.</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Disclosures
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row float-end">
                        <a href="./message_form">
                          <i class="icofont-ui-edit "></i>
                        </a>
                      </div>
                      <div className="row">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Provider</th>
                              <th scope="col">Summary</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row"></th>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSeven">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Amendments
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label>None</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingEight">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Labs
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label>No lab data documented.</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingNine">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Vitals
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label className="col-md-3 col-lg-6 col-sm-12 fw-bold">
                          Most recent vitals from: 0000-00-00 00:00:00
                        </label>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>

                      <div className="row">
                        <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                          Weight:
                        </label>
                        <br></br>
                        <p className="col-md-3 col-lg-3 col-sm-12">
                          <input
                            type="range"
                            class="form-range primary"
                            min="0"
                            max="5"
                            id="customRange2"
                          />
                        </p>
                        <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                          Height:
                        </label>
                        <p className="col-md-3 col-lg-3 col-sm-12">
                        <input
                            type="range"
                            class="form-range primary"
                            min="0"
                            max="5"
                            id="customRange2"
                          />
                        </p>
                      </div>

                      <div className="row">
                        <label className="col-md-3 col-lg-2 col-sm-12 fw-bold p-1">
                          Temperature:
                        </label>
                        <br></br>
                        <p className="col-md-3 col-lg-4 col-sm-12 text-center" style={{ border:"2px solid black", 'borderRadius': "10px"}}>
                        <Slider  value={val} onChange={updateRange} marks={temperature} />
                        </p>
                        <label className="col-md-3 col-lg-2 col-sm-12 fw-bold">
                          BMI:{" "}
                        </label>
                        <br></br>
                        <p className="col-md-3 col-lg-4 col-sm-12" style={{ border:"2px solid black", 'borderRadius': "10px"}}>
                  
                        <Slider value={value} onChange={updateValue} marks={bmi} /></p>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                          Temp Method:
                        </label>
                        <br></br>
                        <p className="col-md-3 col-lg-3 col-sm-12">  <select
                            className="form-select col-lg-4"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value={1}>Oral.</option>
                            <option value={2}>""</option>
                            
                            
                          </select></p>
                        <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                          BMI Status:
                        </label>
                        <br></br>
                        <p className="col-md-3 col-lg-3 col-sm-12">Obesity I</p>
                      </div>

                      <div className="row">
                        <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                          Respiration:{" "}
                        </label>
                        <br></br>
                        <p className="col-md-3 col-lg-3 col-sm-12">
                          {" "}
                          20 per min
                        </p>
                        <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                          Blood Pressure:
                        </label>
                        <p className="col-md-3 col-lg-3 col-sm-12">130/80</p>
                      </div>

                      <div className="row">
                        <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                          Pulse:
                        </label>
                        <br></br>
                        <p className="col-md-3 col-lg-3 col-sm-12">
                          {" "}
                          60 per min
                        </p>
                        <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                          Oxygen Saturation:{" "}
                        </label>
                        <br></br>
                        <p className="col-md-3 col-lg-3 col-sm-12">98 %</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Custom Settings*/}
            <div
              className="modal fade right"
              id="Settingmodal"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog  modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Custom Settings</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body custom_setting">
                    {/* Settings: Color */}
                    <div className="setting-theme pb-3">
                      <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                        <i className="icofont-color-bucket fs-4 me-2 text-primary" />
                        Template Color Settings
                      </h6>
                      <ul className="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2">
                        <li data-theme="indigo">
                          <div className="indigo" />
                        </li>
                        <li data-theme="tradewind" className="active">
                          <div className="tradewind" />
                        </li>
                        <li data-theme="monalisa">
                          <div className="monalisa" />
                        </li>
                        <li data-theme="blue">
                          <div className="blue" />
                        </li>
                        <li data-theme="cyan">
                          <div className="cyan" />
                        </li>
                        <li data-theme="green">
                          <div className="green" />
                        </li>
                        <li data-theme="orange">
                          <div className="orange" />
                        </li>
                        <li data-theme="blush">
                          <div className="blush" />
                        </li>
                        <li data-theme="red">
                          <div className="red" />
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar-gradient py-3">
                      <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                        <i className="icofont-paint fs-4 me-2 text-primary" />
                        Sidebar Gradient
                      </h6>
                      <div className="form-check form-switch gradient-switch pt-2 mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="CheckGradient"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="CheckGradient"
                        >
                          Enable Gradient! ( Sidebar )
                        </label>
                      </div>
                    </div>
                    {/* Settings: Template dynamics */}
                    <div className="dynamic-block py-3">
                      <ul className="list-unstyled choose-skin mb-2 mt-1">
                        <li data-theme="dynamic">
                          <div className="dynamic">
                            <i className="icofont-paint me-2" /> Click to
                            Dyanmic Setting
                          </div>
                        </li>
                      </ul>
                      <div className="dt-setting">
                        <ul className="list-group list-unstyled mt-1">
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label>Primary Color</label>
                            <button
                              id="primaryColorPicker"
                              className="btn bg-primary avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label>Secondary Color</label>
                            <button
                              id="secondaryColorPicker"
                              className="btn bg-secondary avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label className="text-muted">Chart Color 1</label>
                            <button
                              id="chartColorPicker1"
                              className="btn chart-color1 avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label className="text-muted">Chart Color 2</label>
                            <button
                              id="chartColorPicker2"
                              className="btn chart-color2 avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label className="text-muted">Chart Color 3</label>
                            <button
                              id="chartColorPicker3"
                              className="btn chart-color3 avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label className="text-muted">Chart Color 4</label>
                            <button
                              id="chartColorPicker4"
                              className="btn chart-color4 avatar xs border-0 rounded-0"
                            />
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                            <label className="text-muted">Chart Color 5</label>
                            <button
                              id="chartColorPicker5"
                              className="btn chart-color5 avatar xs border-0 rounded-0"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Settings: Font */}
                    <div className="setting-font py-3">
                      <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                        <i className="icofont-font fs-4 me-2 text-primary" />{" "}
                        Font Settings
                      </h6>
                      <ul className="list-group font_setting mt-1">
                        <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="font"
                              id="font-poppins"
                              defaultValue="font-poppins"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="font-poppins"
                            >
                              Poppins Google Font
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="font"
                              id="font-opensans"
                              defaultValue="font-opensans"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="font-opensans"
                            >
                              Open Sans Google Font
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="font"
                              id="font-montserrat"
                              defaultValue="font-montserrat"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="font-montserrat"
                            >
                              Montserrat Google Font
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item py-1 px-2">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="font"
                              id="font-mukta"
                              defaultValue="font-mukta"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="font-mukta"
                            >
                              Mukta Google Font
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* Settings: Light/dark */}
                    <div className="setting-mode py-3">
                      <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                        <i className="icofont-layout fs-4 me-2 text-primary" />
                        Contrast Layout
                      </h6>
                      <ul className="list-group list-unstyled mb-0 mt-1">
                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                          <div className="form-check form-switch theme-switch mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="theme-switch"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="theme-switch"
                            >
                              Enable Dark Mode!
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                          <div className="form-check form-switch theme-high-contrast mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="theme-high-contrast"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="theme-high-contrast"
                            >
                              Enable High Contrast
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                          <div className="form-check form-switch theme-rtl mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="theme-rtl"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="theme-rtl"
                            >
                              Enable RTL Mode!
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer justify-content-start">
                    <button
                      type="button"
                      className="btn btn-white border lift"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary lift">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading_one">
                    <button
                      class="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse_one"
                      aria-expanded="true"
                      aria-controls="collapse_one"
                    >
                      Clinical Reminders
                    </button>
                  </h2>
                  <div
                    id="collapse_one"
                    class="accordion-collapse collapse show"
                    aria-labelledby="heading_one"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="row">
                        <label className="col-md-3 col-lg-6 col-sm-12">
                          Assessment:Colon Cancer Screening
                        </label>

                        <label class="form-group col-lg-3 col-md-3 col-sm-12 text-danger">
                          Past Due?
                        </label>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-6 col-sm-12">
                          Assessment:Prostate Cancer Screening
                        </label>

                        <label class="form-group col-lg-3 col-md-3 col-sm-12 text-danger">
                          Past Due?
                        </label>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-6 col-sm-12">
                          Measurement: Blood Pressure
                        </label>

                        <label class="form-group col-lg-3 col-md-3 col-sm-12 text-danger ">
                          Past Due?
                        </label>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-6 col-sm-12">
                          Treatment: Influenze Vaccine
                        </label>

                        <label class="form-group col-lg-3 col-md-3 col-sm-12 text-danger ">
                          Past Due?
                        </label>
                      </div>
                      <div className="row">
                        <label className="col-md-3 col-lg-6 col-sm-12">
                          Assessment: Tobacco
                        </label>

                        <label class="form-group col-lg-3 col-md-3 col-sm-12 text-danger">
                          Past Due?
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="heading_two">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_two"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Appointments
                  </button>
                </h2>
                <div
                  id="collapse_two"
                  class="accordion-collapse collapse"
                  aria-labelledby="heading_two"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="row">
                      <label className="col-md-3 col-lg-12 col-sm-12">
                        <i class="icofont-clock-time m-1 p-1"></i>Future
                        Appointments
                      </label>
                      <label className="col-md-3 col-lg-12 col-sm-12 m-3 p-3">
                        {" "}
                        No Appointments
                      </label>
                      <hr></hr>
                      <label className="col-md-3 col-lg-12 col-sm-12">
                        <i class="icofont-rotation m-1 p-1"></i>Recurring
                        Appointments
                      </label>
                      <label className="col-md-3 col-lg-12 col-sm-12 m-3 p-3">
                        {" "}
                        No Recurring Appointments
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="heading_three">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_three"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Medical Problems
                  </button>
                </h2>
                <div
                  id="collapse_three"
                  class="accordion-collapse collapse"
                  aria-labelledby="heading_three"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="row">
                      <label>HTN</label>
                      <hr></hr>
                      <label>Chronic Renal Insuficiency</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="heading_four">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_four"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Allergies
                  </button>
                </h2>
                <div
                  id="collapse_four"
                  class="accordion-collapse collapse"
                  aria-labelledby="heading_four"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="row">
                      <label>penicillin</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="heading_five">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_five"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Medications
                  </button>
                </h2>
                <div
                  id="collapse_five"
                  class="accordion-collapse collapse"
                  aria-labelledby="heading_five"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="row">
                      <label>Norvasc</label>
                      <hr></hr>
                      <label>Lisinopril</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="heading_six">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_six"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Immunizations
                  </button>
                </h2>
                <div
                  id="collapse_six"
                  class="accordion-collapse collapse"
                  aria-labelledby="heading_six"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="row">
                      <label>None</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading_seven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_seven"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Prescriptions
                  </button>
                </h2>
                <div
                  id="collapse_seven"
                  class="accordion-collapse collapse"
                  aria-labelledby="heading_seven"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="row">
                      <label>None</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medical_record;
