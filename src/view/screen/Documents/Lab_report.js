import  { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const Lab_report = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
  return (
    <div className="  text-center ">
      <div className="row flex-nowrap">
        <div className=" col-md-3 col-lg-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-90">
            <a
              href="/"
              className="d-flex align-items-center  mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="./documents" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Eye Module</span>
                </a>
              </li>

              <li>
                <a href="./lab_report" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-table" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Lab Report</span>
                </a>
              </li>

              <li>
              <a href="./medical_record" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-people" />{" "}
                  <span className="ms-1 d-none d-sm-inline">Medical Record</span>{" "}
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </div>
       <div className="col-lg-8">
       <nav class="navbar navbar-expand-lg navbar-light bg-light col-lg-6">
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
             
                </ul>
                
              </div>
              
            </div>
            
          </nav>
          <div className="col-lg-10 bg-light fw-bold p-3 float-start text-lg-start">
<h5>Documents Uploader/Viewer</h5>
          </div>
          <div className="conent1 p-2 col-lg-10">
              <label>NOTE: Uploading files with duplicate names will cause the files to be automatically renamed (for example, file.jpg will become file.1.jpg). Filenames are considered unique per patient, not per category.</label>
          </div>
          <div className="content2  p-2 fw-bold p-2 text-lg-start">
          Upload Document to category 'Lab Report'
          
          </div>
          <div className="content3 p-2 text-lg-start">(Multiple files can be uploaded at one time by selecting them using CTRL+Click or SHIFT+Click.)

</div>
<div className="path1 p-2 text-lg-start">
    Source File Path:
    <button className="p-1 m-1 ">Choose Files </button>No File Chosen
</div>
<div className="content3 p-2 text-lg-start">
(Select below to Zip Directory of image slices.)
</div>
<div className="path2 p-2 text-lg-start">
    
    <button className="p-1 m-1 ">Choose Files </button>No File Chosen
</div>
<div className="input text-lg-start p-2">
Optional Destination or Dicom Study Name:
<input type="text" className="col-lg-10 p-2"/>
</div>
<div className="button text-lg-start">
<button  className="btn btn-primary col-lg-2 m-3 " >Upload</button>
</div>
<div className="upload col-lg-8">
<FileUploader  handleChange={handleChange} name="file" types={fileTypes} />

</div>
<div className="input text-lg-start p-2 fw-bold">
Download document template for this patient and visit

</div>
<div className="text-lg-start">
<div class="btn-group  col-lg-4" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-info">Upload</button>
  <div class="btn-group col-lg-9" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
     -- Select Template --
    </button>
    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><a class="dropdown-item" href="#">""</a></li>
      <li><a class="dropdown-item" href="#">""</a></li>
    </ul>
  </div>
</div>
</div>
<div className="text-lg-start">

<div className="input text-lg-start p-2 fw-bold">
Download document template for this patient and visit

</div>
<div class="btn-group  col-lg-4" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-info">Upload</button>
  <div class="btn-group col-lg-9" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
     -- Select Template --
    </button>
    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><a class="dropdown-item" href="#">""</a></li>
      <li><a class="dropdown-item" href="#">""</a></li>
    </ul>
  </div>
</div>
</div>
       </div>
          
      </div>
    
    </div>
  );
};

export default Lab_report;
