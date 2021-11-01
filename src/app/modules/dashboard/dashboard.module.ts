import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from 'src/app/components/dashboard/dashboard.component';
import {LeaveRequestComponent} from 'src/app/components/leave-request/leave-request.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardHomeComponent} from 'src/app/components/dashboard-home/dashboard-home.component';

import {FullCalendarModule} from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import {ApprovedRequestsComponent} from 'src/app/components/approved-requests/approved-requests.component';
import {PendingRequestsComponent} from 'src/app/components/pending-requests/pending-requests.component';
import {TopDisplaysComponent} from '../../reusables/top-displays/top-displays.component';
import {TopButtonComponent} from '../../reusables/top-button/top-button.component';
import {LeaveBalanceComponent} from '../../components/leave-balance/leave-balance.component';
import {LeaveApplicationComponent} from '../../components/leave-application/leave-application.component';
import {GeneralAlertComponent} from 'src/app/components/general-alert/general-alert.component';
import {MatDialogModule} from '@angular/material/dialog';
import {CustomBackButtonComponent} from '../../components/custom-back-button/custom-back-button.component';
import {EmployeeSalaryDetailsComponent} from '../../components/employee-salary-details/employee-salary-details.component';
import {SidebarComponent} from 'src/app/components/sidebar/sidebar.component';
import {NavbarComponent} from 'src/app/components/navbar/navbar.component';
import {AllEmployeesComponent} from 'src/app/components/all-employees/all-employees.component';
import {EditEmployeeSalaryComponentComponent} from 'src/app/components/edit-employee-salary-component/edit-employee-salary-component.component';
import {leaveChildrenRoutes} from 'src/app/routes/leave-routes';
import {LoansComponent} from 'src/app/components/loans/loans.component';
import {SharedModule} from "../shared/shared.module";


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);



const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardHomeComponent },
      { path: 'leave', component: LeaveRequestComponent, children: leaveChildrenRoutes },
      {path: 'leave-balance', component: LeaveBalanceComponent },
      {path: 'loans', component: LoansComponent },
      {path: 'leave-application', component: LeaveApplicationComponent },
      {path: 'payroll', loadChildren: () => import('../payroll/payroll.module').then(p => p.PayrollModule),},
    ]
  }
];


@NgModule({
  declarations: [
    DashboardComponent,
    LeaveRequestComponent,
    DashboardHomeComponent,
    ApprovedRequestsComponent,
    PendingRequestsComponent,
    // TopDisplaysComponent,
    // TopButtonComponent,
    SidebarComponent,
    NavbarComponent,
    LeaveBalanceComponent,
    GeneralAlertComponent,
    LeaveApplicationComponent,
    // SalaryMgtComponent,
    CustomBackButtonComponent,
    EmployeeSalaryDetailsComponent,
    EditEmployeeSalaryComponentComponent,
    AllEmployeesComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [DashboardHomeComponent],
  // providers: [MatDialog]
})
export class DashboardModule { }
