import Admin from "../../../../components/admin";
import Sidebar from "../../../../components/sidebar";

function Family_history() {
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

        <div className="row col-12 p-2 ">
          <div className="col-lg-6">
            <button type="button" class="btn btn-info col-3">
              <i class="icofont-ui-edit m-1 p-1"></i>Edit
            </button>
          </div>
          <div className="col-lg-6">
            <h4 className="col-4 float-end fw-bold">Family History</h4>
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
              Father:
            </label>
            <label className="col-md-3 col-lg-6 col-sm-12 fw-bold mt-3">
              Diagnosis Code:
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
              Mother:
            </label>
            <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
              Diagnosis Code:
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
              Siblings:
            </label>
            <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
              Diagnosis Code:
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
              Spouse:
            </label>
            <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
              Diagnosis Code:
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
              Offspring:
            </label>
            <label className="col-md-3 col-lg-6 col-sm-12 fw-bold ">
              Diagnosis Code:
            </label>
          </div>
        </div>
      </div>
      <div className="col-lg-2">
        <Admin></Admin>
      </div>
    </div>
  );
}

export default Family_history;
