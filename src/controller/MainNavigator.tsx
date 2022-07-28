import React from "react";
import { Routes, Route } from "react-router-dom";

import '../utils/css/App.css';
import Ui from '../view/screen/Ui'
import Patient from '../view/screen/patient/patient';
import Schedule from '../view/screen/schedule/schedule'
import Log from '../view/screen/auth/log'
import Patient_list from '../view/screen/patient/patient_list';
import Calendar from '../view/screen/calendar/calendar';
import Patient_profile from '../view/screen/patient/patient_profile';
import Permissions from '../view/screen/access_privilege/permissions';
import Access_privilege from '../view/screen/access_privilege/access_privilege';
import Role_Master from '../view/screen/role_master/role_master';
import Add_role from '../view/screen/role_master/add_role';
import MedicalReport from '../view/screen/medical_record/medical_record';
import History from '../view/screen/History/general';
import Family_history from '../view/screen/History/family_history';
import Life_style from '../view/screen/History/life-style';
import Other from '../view/screen/History/other';
import Transaction from '../view/screen/Transaction/transaction';
import Report from '../view/screen/Report/report';
import Medical_form from '../view/screen/medical_record/form/message_form';
import Patient_reminder from '../view/screen/medical_record/form/patient_reminder';
import Rules from '../view/screen/medical_record/form/rules';
import Disclosuer from '../view/screen/medical_record/form/disclosuer';
import Register from '../view/screen/auth/register';
function MainNavigator() {
  return (
    <div className="App">
      <Routes>
     
        <Route path="/" element={<Log />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/ui" element={<Ui />} />
        <Route path="/access" element={<Access_privilege />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/Patient_reminder" element={<Patient_reminder />} />
        <Route path="/history" element={<History />} />
        <Route path="/other" element={<Other />} />
        <Route path="/report" element={<Report />} />
        <Route path="/disclosuer" element={<Disclosuer />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/life_style" element={<Life_style />} />
        <Route path="/role_master" element={<Role_Master />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/family_history" element={<Family_history />} />
        <Route path="/add_role" element={<Add_role />} />
        <Route path="/patient_profile" element={<Patient_profile />} />
        <Route path="/medical_report" element={<MedicalReport />} />
        <Route path="/message_form" element={<Medical_form />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/patient_list" element={<Patient_list />} />
        <Route path="/dashboard" element={<Ui />} />
        <Route path="/patient" element={<Patient />} />            
      </Routes>
    </div>
  );
}

export default MainNavigator;
