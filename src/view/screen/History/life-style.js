import Admin from "../../components/admin";
import Sidebar from "../../components/sidebar";

function Life_style() {
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-9">
        <Admin></Admin>
      <div className="col-lg-10">

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
                <a class="nav-link" href="./documents">
                  Documents
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./transaction">
                  Transactions
                </a>
              </li>

             
            </ul>
          </div>
        </div>
      </nav>

      <div className="row col-12 p-2 ">
        <div className="col-lg-6">
          <button type="button" class="btn btn-info col-3">
            <i class="icofont-ui-edit m-1 p-1"></i>Edit
          </button>
        </div>
        <div className="col-lg-6">
          <h4 className="col-4 float-end fw-bold">Life Style</h4>
        </div>
      </div>

      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
          <div class="container-fluid col-8">
            <a class="navbar-brand" href="./history">
              General
            </a>
            <a class="navbar-brand" href="./family_history">
              Family History
            </a>

            <a class="navbar-brand" href="./life_style">
              Lifestyle
            </a>
            <a class="navbar-brand" href="./other">
              Other
            </a>
          </div>
        </nav>
      </div>

      <div className="container text-center">
        <div className="row">
          <label className="col-md-3 col-lg-6 col-sm-12 fw-bold mt-3">
            Tobacco:{" "}
          </label>
        </div>
        <div className="row">
          <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
            Coffee:{" "}
          </label>
        </div>
        <div className="row">
          <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
            Alcohol:
          </label>
        </div>
        <div className="row">
          <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
            Recreational Drugs:
          </label>
        </div>
        <div className="row">
          <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
            Counseling:
          </label>
        </div>
        <div className="row">
          <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
            Exercise Patterns:
          </label>
        </div>
        <div className="row">
          <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
            Hazardous Activities:{" "}
          </label>
        </div>
        <div className="row">
          <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
            Sleep Patterns:{" "}
          </label>
        </div>
        <div className="row">
          <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
            Seatbelt Use:{" "}
          </label>
        </div>
      </div>
      </div>
      
      </div>
    </div>
  );
}

export default Life_style;
