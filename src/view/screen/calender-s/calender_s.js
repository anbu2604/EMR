import React, { useState, useContext, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";
import { getMonth } from "../../screen/util";
import CalendarHeader from "../../components/CalendarHeader";
import Sidebar_one from "../../components/sidebar_one";
import Month from "../../components/Month";
import GlobalContext from "../../context/GlobalContext";
import EventModal from "../../components/EventModal";
import "./calenders.css"
const Calenders = () => {
    const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-lg-9">
        <Admin></Admin>
        <div className="col-lg-12 ">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar_one />
          <Month month={currenMonth} />
          </div>
            </div>
            </div>

    </div>
  )
}

export default Calenders
