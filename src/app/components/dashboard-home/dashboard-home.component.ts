import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: 'auto',
    // dayCellDidMount: function (arg: DayCellMountArg){
    //   if(arg.isToday){
    //     console.log(arg);
    //   };
    // },  
    // dayCellContent: 
    // contentHeight: 600,
    // aspectRatio: 0.9,
    // contentHeight: 400,
    views: {
      dayGridMonth: { // name of view
        titleFormat: { month: 'short', year: 'numeric' },
        dayHeaderFormat : {weekday: 'narrow'},
        // other view-specific options here
      },

    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
