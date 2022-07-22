import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from '../view/screens/login/Login';
import Forgot from '../view/screens/login/forgotpassword/Forgot';
import Reset from '../view/screens/login/resetpassword/Reset';
import Signup from '../view/screens/login/signup/Signup';
import '../utils/css/App.css';
import { Dashboard } from '../view/screens/dashboard/Dashboard';
import  App  from '../view/screens/api';
import Ui from '../view/screens/login/calendar/Ui'
import Patient from '../view/screens/login/calendar/patient';
import Cal from '../view/screens/login/calendar/cal'
import Log from '../view/screens/login/calendar/log'
import Fl from '../view/screens/login/calendar/fullcalender'
import Patient_list from '../view/screens/login/calendar/patient_list';
import Calendar from '../view/screens/login/calendar/calendar';
import Usr from '../view/screens/login/usr/usr';
import Patient_profile from '../view/screens/login/calendar/patient_profile';
import Permissions from '../view/screens/login/calendar/permissions';
import Access_privilege from '../view/screens/login/calendar/access_privilege';
import Role_Master from '../view/screens/login/calendar/role_master';
import Add_role from '../view/screens/login/calendar/add_role';
import Medical_report from '../view/screens/login/calendar/medical_report';
import History from '../view/screens/login/calendar/History/general';
import Family_history from '../view/screens/login/calendar/History/family_history';
import Relatives from '../view/screens/login/calendar/History/Relatives';
import Life_style from '../view/screens/login/calendar/History/life-style';
import Other from '../view/screens/login/calendar/History/other';
import Transaction from '../view/screens/login/calendar/Transaction/transaction';
import Report from '../view/screens/login/calendar/Report/report';
import Eye_module from '../view/screens/login/calendar/Documents/Eye_module';
import Lab_report from '../view/screens/login/calendar/Documents/Lab_report';
import MedicalRecord from '../view/screens/login/calendar/Documents/Medical_record';
function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        {/* Login */}
        <Route path="/cal" element={<Cal />} />
        <Route path="/usr" element={<Usr />} />
        <Route path="/history" element={<History />} />
        <Route path="/other" element={<Other />} />
        <Route path="/report" element={<Report />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/relatives" element={<Relatives />} />
        <Route path="/life_style" element={<Life_style />} />
        <Route path="/lab_report" element={<Lab_report />} />
        <Route path="/eye_module" element={<Eye_module />} />
        <Route path="/medical_record" element={<MedicalRecord />} />

        <Route path="/role_master" element={<Role_Master />} />
        <Route path="/Permissions" element={<Permissions />} />
        <Route path="/family_history" element={<Family_history />} />
        <Route path="/add_role" element={<Add_role />} />
        <Route path="/Patient_profile" element={<Patient_profile />} />
        <Route path="/medical_report" element={<Medical_report />} />
        <Route path="/fl" element={<Fl />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/Access" element={<Access_privilege />} />
        <Route path="/patient_list" element={<Patient_list />} />
        {/* Sign Up */}
        <Route path="/signup" element={<Signup />} />

        <Route path="/ui" element={<Ui />} />
        <Route path="/Dashborad" element={<Ui />} />
        <Route path="/" element={<Log />} />
        {/* Forgot password */}
        <Route path="/forgot" element={<Forgot />} />

        {/* Reset password */}
        <Route path="/reset" element={<Reset />} />

        {/* User */}

      
        <Route path="/patient" element={<Patient />} />

       

        {/* dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Masters */}
        <Route path="api" element={<App />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;
