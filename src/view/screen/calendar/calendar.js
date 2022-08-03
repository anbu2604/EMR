import * as React from 'react';
import * as DataSource from './datasource.json';

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

function Calendar(){
    return( <ScheduleComponent currentView='Month' selectedDate={new Date(2019, 0, 6)} 
    eventSettings={{dataSource: this.schData}}> 
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>  
    );
  }

export default Calendar;