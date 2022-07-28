import Admin from "../../components/admin";
import Sidebar from "../../components/sidebar";

function History() {
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
            <h4 className="col-4 float-end fw-bold">General</h4>
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

        <div className="container">
          <div className="row">
            <label className="col-md-3 col-lg-2 col-sm-12 fw-bold">
              Risk Factors:
            </label>
            <label className="col-md-3 col-lg-4 col-sm-12">
              [ ] Varicose Veins
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Hypertension
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Diabetes
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Sickle Cell
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Fibroids
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] PID (Pelvic Inflammatory Disease)
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Severe Migraine
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Heart Disease
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Thrombosis/Stroke
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Hepatitis
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ]Gall Bladder Condition
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Breast Disease
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Depression
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Allergies
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Infertility
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Asthma
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Epilepsy
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Contact Lenses
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ]Contraceptive Complication (specify)
            </label>
          </div>
          <div className="row">
            <label className="col-md-3 col-lg-4 col-sm-12 offset-2">
              [ ] Other (specify)
            </label>
          </div>
          <div className="container fw-bold">Exams/Tests:</div>
        </div>
      </div>
    
      </div>
    </div>
  );
}

export default History;
