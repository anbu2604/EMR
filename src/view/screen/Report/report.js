import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";


function Report() {
  return (
   
<div className="row">
  <div className="col-lg-3">
    <Sidebar></Sidebar>
  </div>
  <div className="col-lg-7">
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

  
<div className="container bg-light">
    <div className="row">
<h3 className="col-lg-4 col-md-3 col-sm-12 ">Patient Report</h3>
<button className="btn btn-info col-lg-2 m-1 p-1">
<i class="icofont-tick-mark  m-1"></i>
    Check All
</button>
<button className="btn btn-info col-lg-2 m-1 p-1">
<i class="icofont-refresh m-1 p-1"></i>
    Clear All
</button>
    </div>

   <div className="row ">
   <div className="form-check col-lg-2">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Demographics</label>
   
    </div>
    <div className="form-check col-lg-2">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Immunization</label>
   
    </div>
    <div className="form-check col-lg-3">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Recurrent Appointments</label>
   
    </div>
   </div>
   <div className="row">
   <div className="form-check col-lg-2">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>History</label>
   
    </div>
    <div className="form-check col-lg-2">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Patient Notes</label>
   
    </div>
   </div>
   <div className="row">
   <div className="form-check col-lg-2">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Insurance</label>
   
    </div>
    <div className="form-check col-lg-2">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Transactions </label>
   
    </div>
   </div>
   <div className="row">
   <div className="form-check col-lg-2">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Billing</label>
   
    </div>
    <div className="form-check col-lg-2">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Communications </label>
   
    </div>
   </div>
   <div className="row">
   <div className="button1 col-3">
<button className="btn btn-info"> <i class="icofont-tick-mark p-1 m-1"></i>Generate Report</button>
    </div>
    <div className="button2 col-3">
    <button className="btn btn-info"> <i class="icofont-download p-1 m-1"></i>Download PDF</button>

    </div>
    </div>
</div>
<hr></hr>
<div className="container">
<div className="row">
    <label className="col-lg-6 col-md-3 col-sm-12 fw-bold">
        Issues:
    </label>
    <label className="col-lg-6 col-md-3 col-sm-12 fw-bold">
        Encounters & Forms:
    </label>
</div>
<div className="row">

   
    <label className="col-lg-6 col-md-3 col-sm-12 ">
        Allergies:
    </label>
    <div className="form-check col-lg-2">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Sad(2021-11-01)</label>
   
    </div> 
</div>
<div className="row">
<div className="form-check col-lg-3">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>pencillin</label>
   
    </div> 
    <label className="col-lg-3">Active</label>
    <div className="form-check col-lg-2">
   <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>SOAP</label>
   
    </div> 
</div>
<div className="row">
    <label className="col-lg-6 fw-bold">Medical Problems:</label>
    <div className="form-check col-lg-3">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Vitals</label>
    </div>
</div>
<div className="row">
<div className="form-check col-lg-3">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>HTN</label>
    </div>
    <label className="col-lg-2">Active</label>
</div>
<div className="row">
<div className="form-check col-lg-3">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Chronic Renal Insuficiency</label>
    </div>
    <label className="col-lg-2">Active</label>
</div>
<div className="row">
<div className="form-check col-lg-3">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Dermatochalasis </label>
    </div>
    <label className="col-lg-2">Active</label>
</div>
<div className="row">
    <label className="col-lg-6 fw-bold">Medications:</label>
    </div>
    <div className="row">
<div className="form-check col-lg-3">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Norvasc </label>
    </div>
    <label className="col-lg-2">Active</label>
</div>
<div className="row">
<div className="form-check col-lg-3">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
    <label>Lisinopril </label>
    </div>
    <label className="col-lg-2">Active</label>
</div>
<div className="row">
   <div className="button1 col-3">
<button className="btn btn-info"> <i class="icofont-tick-mark p-1 m-1"></i>Generate Report</button>
    </div>
    <div className="button2 col-3">
    <button className="btn btn-info"> <i class="icofont-download p-1 m-1"></i>Download PDF</button>

    </div>
    </div>
    <hr></hr>
    <div className="row">
    <label className="col-lg-2 fw-bold">Procedures:</label>
    <label className="col-lg-2 ">Order Date</label>
    <label className="col-lg-2 ">Encounter Date</label>
    <label className="col-lg-2 ">Order Descriptions</label>
    </div>
    <div className="row ">
   <div className="button1 col-3">
<button className="btn btn-info"> <i class="icofont-tick-mark p-1 m-1"></i>Generate Report</button>
    </div>
    <div className="button2 col-3">
    <button className="btn btn-info"> <i class="icofont-download p-1 m-1"></i>Download PDF</button>

    </div>
    </div>
    <hr></hr>
    <div className="row">
    <label className="col-lg-2 fw-bold">Documents:</label>
    </div>
    <div className="row ">
   <div className="button1 col-3">
<button className="btn btn-info"> <i class="icofont-tick-mark p-1 m-1"></i>Generate Report</button>
    </div>
    <div className="button2 col-3">
    <button className="btn btn-info"> <i class="icofont-download p-1 m-1"></i>Download PDF</button>

    </div>
    </div>
    <hr></hr>
  </div>
 
</div>
<div className="col-lg-2">
    <Admin></Admin>
  </div>
</div>
         
  );
}

export default Report;
