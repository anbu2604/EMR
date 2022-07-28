import React from "react";
import Admin from "../../components/admin";
import Sidebar from "../../components/sidebar";

function Patient_list(){
    return(
        <div className="row">
          <div className="col-lg-3">
            <Sidebar></Sidebar>
                     </div>
                     <div className="col-lg-9">
                       <Admin></Admin>
                       <div className="col-lg-11">
 
          {/* Body: Body */}
          <div className="body d-flex py-3">
            <div className="container-xxl">
              <div className="row align-items-center">
                <div className="border-0 mb-4">
                  <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                    <h3 className="fw-bold mb-0">Patient List</h3>
                  </div>
                </div>
              </div> {/* Row end  */}
              <div className="row mb-3">
                <div className="card">
                  <div className="card-body">
                    <table id="patient-table" className="table table-hover align-middle mb-0" style={{width: '100%'}}>
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Patients</th>
                          <th>Age</th>
                          <th>Adress</th>
                          <th>Join Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PT-0001</td>
                          <td><img src="assets/images/xs/avatar3.jpg" className="avatar  rounded-circle me-2" alt="profile-image" /><span><a href="./medical_report">Molly </a></span></td>
                          <td>45</td>
                          <td>70 Bowman St. South Windsor, CT 06074</td>
                          <td>May 13, 2021</td>
                          
                        </tr>
                        <tr>
                          <td>PT-0011</td>
                          <td><img src="assets/images/xs/avatar1.jpg" className="avatar  rounded-circle me-2" alt="profile-image" /><span>Brian</span></td>
                          <td>35</td>
                          <td>123 6th St. Melbourne, FL 32904</td>
                          <td>May 13, 2021</td>
                          
                        </tr>
                        <tr>
                          <td>PT-0045</td>
                          <td><img src="assets/images/xs/avatar2.jpg" className="avatar  rounded-circle me-2" alt="profile-image" /><span>Julia</span></td>
                          <td>42</td>
                          <td>4 Shirley Ave. West Chicago, IL 60185</td>
                          <td>May 17, 2021</td>
                          
                        </tr>
                        <tr>
                          <td>PT-0030</td>
                          <td><img src="assets/images/xs/avatar4.jpg" className="avatar  rounded-circle me-2" alt="profile-image" /><span>Sonia</span></td>
                          <td>25</td>
                          <td>123 6th St. Melbourne, FL 32904</td>
                          <td>May 13, 2021</td>
                          
                        </tr>
                        <tr>
                          <td>PT-0078</td>
                          <td><img src="assets/images/xs/avatar5.jpg" className="avatar  rounded-circle me-2" alt="profile-image" /><span>Adam H</span></td>
                          <td>18</td>
                          <td>4 Shirley Ave. West Chicago, IL 60185</td>
                          <td>May 18, 2021</td>
                          
                        </tr>
                        <tr>
                          <td>PT-0098</td>
                          <td><img src="assets/images/xs/avatar9.jpg" className="avatar  rounded-circle me-2" alt="profile-image" /><span>Alexander</span></td>
                          <td>38</td>
                          <td>123 6th St. Melbourne, FL 32904</td>
                          <td>May 13, 2021</td>
                          
                        </tr>
                        <tr>
                          <td>PT-0999</td>
                          <td><img src="assets/images/xs/avatar11.jpg" className="avatar  rounded-circle me-2" alt="profile-image" /><span>Gabrielle</span></td>
                          <td>65</td>
                          <td>4 Shirley Ave. West Chicago, IL 60185</td>
                          <td>May 17, 2021</td>
                          
                        </tr>
                        <tr>
                          <td>PT-0101</td>
                          <td><img src="assets/images/xs/avatar12.jpg" className="avatar  rounded-circle me-2" alt="profile-image" /><span>Grace</span></td>
                          <td>40</td>
                          <td>4 Shirley Ave. West Chicago, IL 60185</td>
                          <td>May 17, 2021</td>
                          
                        </tr>
                        <tr>
                          <td>PT-1001</td>
                          <td><img src="assets/images/xs/avatar8.jpg" className="avatar  rounded-circle me-2" alt="profile-image" /><span>Ryan </span></td>
                          <td>34</td>
                          <td>70 Bowman St. South Windsor, CT 06074</td>
                          <td>May 13, 2021</td>
                          
                        </tr>
                        <tr>
                          <td>PT-1101</td>
                          <td><img src="assets/images/xs/avatar7.jpg" className="avatar  rounded-circle me-2" alt="profile-image" /><span>Christian</span></td>
                          <td>21</td>
                          <td>123 6th St. Melbourne, FL 32904</td>
                          <td>May 13, 2021</td>
                          
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          </div>
                     </div>
        </div>
    )
}
export default Patient_list;