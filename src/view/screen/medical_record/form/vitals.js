import React from "react";
import Sidebar from "../../../components/sidebar";
import Admin from "../../../components/admin";
import "./vitals.css";
import { useState, useEffect } from "react";

function Vitals() {
  const [value, onChange] = useState(0);
  const [value1, onChanges] = useState(0);
  const [value2, onChanged] = useState(0);
  const [value3, onChangesed] = useState(0);

  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 1)}px`;
     
    }
   
  
  });
 
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-9">
        <Admin></Admin>
        <div className="col-lg-10 border-5">
          <h3 className="fw-bold">Vitals</h3>
          <div className="container vitals_detail m-5 p-3">
            <div className="row ">
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Weight:
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">
                <div className="slider-parent">
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={value}
                    onChange={({ target: { value: radius } }) => {
                      onChange(radius);
                    }}
                  />
                  <div className="buble">{value}</div>
                </div>
              </p>
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Height:
              </label>
              <p className="col-md-3 col-lg-3 col-sm-12">
              <div className="slider-parent">
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value1={value}
                    onChange={({ target: { value: radius } }) => {
                      onChanges(radius);
                    }}
                  />
                  <div className="buble">{value1}</div>
                </div>
              </p>
            </div>
            <div className="row">
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold p-1">
                Temperature:
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">
              <div className="slider-parent">
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value1={value}
                    onChange={({ target: { value: radius } }) => {
                      onChanged(radius);
                    }}
                  />
                  <div className="buble">{value2}</div>
                </div>
              </p>
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                BMI:{" "}
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">
              <div className="slider-parent">
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value1={value}
                    onChange={({ target: { value: radius } }) => {
                      onChangesed(radius);
                    }}
                  />
                  <div className="buble">{value3}</div>
                </div>
              </p>
            </div>
            <div className="row">
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Temp Method:
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">
                {" "}
                <select
                  className="form-select col-lg-4"
                  aria-label="Default select example"
                >
                  <option selected>Select</option>
                  <option value={1}>Oral</option>
                  <option value={2}>Rectal</option>
                  <option value={3}>Axillary</option>
                  <option value={4}>Tympanic</option>
                  <option value={5}>Temporal artery</option>
                </select>
              </p>
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                BMI Status:
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">
              <select
                  className="form-select col-lg-4"
                  aria-label="Default select example"
                >
                  <option selected>Select</option>
                  <option value={1}>Underweight</option>
                  <option value={2}>Healthy weight</option>
                  <option value={3}> Overweight</option>
                  <option value={4}>Obesity</option>
                </select>
              </p>
            </div>

            <div className="row">
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Respiration:{" "}
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">  <select
                  className="form-select col-lg-4"
                  aria-label="Default select example"
                >
                  <option selected>Select</option>
                  <option value={1}>10 per min</option>
                  <option value={2}>20 per min</option>
                  <option value={3}> 30 per min</option>
                  <option value={4}>40 per min</option>
                  <option value={5}>50 per min</option>
                </select></p>
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Blood Pressure:
              </label>
              <p className="col-md-3 col-lg-4 col-sm-12">
                 
                  <input type="number" className="col-lg-4" placeholder="130"/>
                  <input type="number" className="col-lg-4" placeholder="80"/>
                
                  </p>
            </div>

            <div className="row">
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Pulse:
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12">  <select
                  className="form-select col-lg-4"
                  aria-label="Default select example"
                >
                  <option selected>Select</option>
                  <option value={1}>20 per min</option>
                  <option value={2}>40 per min</option>
                  <option value={3}> 60 per min</option>
                  <option value={4}>80 per min</option>
                  <option value={5}>100 per min</option>
                </select></p>
              <label className="col-md-3 col-lg-3 col-sm-12 fw-bold">
                Oxygen Saturation:{" "}
              </label>
              <br></br>
              <p className="col-md-3 col-lg-3 col-sm-12"><select
                  className="form-select col-lg-2"
                  aria-label="Default select example"
                >
                  <option selected>Select</option>
                  <option value={1}>10%</option>
                  <option value={2}>20%</option>
                  <option value={3}>30%</option>
                  <option value={4}>40%</option>
                  <option value={5}>50%</option>
                  <option value={6}>60%</option>
                  <option value={7}>70%</option>
                  <option value={8}>80%</option>
                  <option value={9}>90%</option>
                  <option value={10}>100%</option>
                </select></p>
            </div>
            <button className=" btn btn-primary col-lg-1">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vitals;
