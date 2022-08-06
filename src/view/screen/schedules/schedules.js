import React from 'react';

import Scheduler from 'devextreme-react/scheduler';
import Sidebar from "../../components/sidebar";
import Admin from "../../components/admin";
import { data } from './data.js';

const currentDate = new Date(2021, 2, 28);
const views = ['week', 'month'];

class App extends React.Component {
  render() {
    return (
        <div className="row">
        <div className="col-lg-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-lg-9">
          <Admin></Admin>
          <div className="col-lg-10">
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        views={views}
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9} />
        </div>
        </div>
        </div>
    );
  }
}

export default App;