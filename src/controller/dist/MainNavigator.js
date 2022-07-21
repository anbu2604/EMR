"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Forgot_1 = require("../view/screens/login/forgotpassword/Forgot");
var Reset_1 = require("../view/screens/login/resetpassword/Reset");
var Signup_1 = require("../view/screens/login/signup/Signup");
var Country_1 = require("../view/screens/master/address/country/Country");
var Address_1 = require("../view/screens/user/address/Address");
var Bank_1 = require("../view/screens/user/bank/Bank");
var Business_1 = require("../view/screens/user/business/Business");
var bisbankdetails_1 = require("../view/screens/user/business-bank-details/bisbankdetails");
require("../utils/css/App.css");
var Dashboard_1 = require("../view/screens/dashboard/Dashboard");
var api_1 = require("../view/screens/api");
var Ui_1 = require("../view/screens/login/calendar/Ui");
var patient_1 = require("../view/screens/login/calendar/patient");
var cal_1 = require("../view/screens/login/calendar/cal");
var log_1 = require("../view/screens/login/calendar/log");
var fullcalender_1 = require("../view/screens/login/calendar/fullcalender");
var patient_list_1 = require("../view/screens/login/calendar/patient_list");
var calendar_1 = require("../view/screens/login/calendar/calendar");
var usr_1 = require("../view/screens/login/usr/usr");
var patient_profile_1 = require("../view/screens/login/calendar/patient_profile");
var permissions_1 = require("../view/screens/login/calendar/permissions");
var access_privilege_1 = require("../view/screens/login/calendar/access_privilege");
var role_master_1 = require("../view/screens/login/calendar/role_master");
var add_role_1 = require("../view/screens/login/calendar/add_role");
var medical_record_1 = require("../view/screens/login/calendar/medical_record");
function MainNavigator() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/cal", element: react_1["default"].createElement(cal_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/usr", element: react_1["default"].createElement(usr_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/role_master", element: react_1["default"].createElement(role_master_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/Permissions", element: react_1["default"].createElement(permissions_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/add_role", element: react_1["default"].createElement(add_role_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/Patient_profile", element: react_1["default"].createElement(patient_profile_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/medical_report", element: react_1["default"].createElement(medical_record_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/fl", element: react_1["default"].createElement(fullcalender_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/calendar", element: react_1["default"].createElement(calendar_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/Access", element: react_1["default"].createElement(access_privilege_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/list", element: react_1["default"].createElement(patient_list_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/signup", element: react_1["default"].createElement(Signup_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/ui", element: react_1["default"].createElement(Ui_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(log_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/forgot", element: react_1["default"].createElement(Forgot_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/reset", element: react_1["default"].createElement(Reset_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/address", element: react_1["default"].createElement(Address_1.Address, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/bank", element: react_1["default"].createElement(Bank_1.Bank, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/patient", element: react_1["default"].createElement(patient_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/business", element: react_1["default"].createElement(Business_1.Business, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/bisbankdetails", element: react_1["default"].createElement(bisbankdetails_1.Bisbankdetails, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/dashboard", element: react_1["default"].createElement(Dashboard_1.Dashboard, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "about", element: react_1["default"].createElement(Country_1.Country, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "api", element: react_1["default"].createElement(api_1["default"], null) }))));
}
exports["default"] = MainNavigator;
