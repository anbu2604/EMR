import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";


function Transaction() {
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

          <div className="row col-12 ">
            <div className="col-lg-8">
              <ButtonGroup size="lg" className="mb-2 col-lg-12">
                <Button>
                 
                  <i class="icofont-plus p-1 m-1"></i>Create New Transaction
                </Button>
                <Button><i class="icofont-printer p-1 m-1"></i>View/Print Blank Referral Form</Button>
              </ButtonGroup>
            </div>
            <div className="col-lg-3">
              <h4 className="col-4 float-end fw-bold"> Transactions</h4>
            </div>
          </div>

          <div className="contanier text-center ">
            <div className="row bg-secondary p-3 m-3">
                <div className="col">
                <i class="icofont-warning-alt m-1 p-1"></i>
                There are no transactions on file for this patient.
                </div>
            </div>
          </div>

         </div>
         </div>
    </div>
  );
}

export default Transaction;
