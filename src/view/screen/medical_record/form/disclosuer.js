import React from "react";
import Admin from "../../../components/admin";
import Sidebar from "../../../components/sidebar";
const disclosuer = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-9">
        <Admin></Admin>
        <div className="col-lg-12">
            
        </div>
      </div>
    </div>
  );
};

export default disclosuer;
