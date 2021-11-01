import {NgModule, Pipe} from '@angular/core';
import {SalaryManagementComponent} from './salary-mgt/salary-management/salary-management.component';
import {SalaryMgtFormComponent} from './salary-mgt/salary-mgt-form/salary-mgt-form.component';
import {SalaryMgtDetailsComponent} from './salary-mgt/salary-mgt-details/salary-mgt-details.component';
import {SalaryAdvanceComponent} from './salary-advance/salary-advance/salary-advance.component';
import {SalaryAdvanceFormComponent} from './salary-advance/salary-advance-form/salary-advance-form.component';
import {SalaryAdvanceDetailsComponent} from './salary-advance/salary-advance-details/salary-advance-details.component';
import {SuccessDialogComponent} from './salary-advance/success-dialog/success-dialog.component';
import {RouterModule, Routes} from "@angular/router";
import {MATERIAL_MODULES} from "../../material.module";
import {SalaryMgtListComponent} from './salary-mgt/salary-mgt-list/salary-mgt-list.component';
import {SharedModule} from "../shared/shared.module";
import {SalaryAdvanceListComponent} from './salary-advance/salary-advance-list/salary-advance-list.component';
import {NotificationComponent} from './notification/notification.component';
import {LoansAdvanceComponent} from './loans-advance/loans-advance.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { StatusComponent } from './salary-advance/status/status.component';

const routes: Routes = [
  {path: '', redirectTo: 'salary-mgt', pathMatch: 'prefix'},
  {
    path: 'salary-mgt', component: SalaryManagementComponent, children: [
      {path: '', component: SalaryMgtListComponent},
      {path: 'create', component: SalaryMgtFormComponent},
      {path: 'edit/:id', component: SalaryMgtFormComponent},
      {path: 'details/:id', component: SalaryMgtDetailsComponent},
    ],
  },

  {
    path: 'salary-advance', component: SalaryAdvanceComponent, children: [
      {path: '', component: SalaryAdvanceListComponent},
      {path: 'create', component: SalaryAdvanceFormComponent},
      {path: 'edit/:id', component: SalaryAdvanceFormComponent},
      {path: 'details/:id', component: SalaryAdvanceDetailsComponent},
      {path: 'status', component: StatusComponent},

    ],
  },

  {path: 'loans-advance', component: LoansAdvanceComponent},

];


@NgModule({
  declarations: [
    SalaryManagementComponent,
    SalaryMgtFormComponent,
    SalaryMgtDetailsComponent,
    SalaryAdvanceComponent,
    SalaryAdvanceFormComponent,
    SalaryAdvanceDetailsComponent,
    SuccessDialogComponent,
    SalaryMgtListComponent,
    SalaryAdvanceListComponent,
    NotificationComponent,
    LoansAdvanceComponent,
    StatusComponent,
  ],

  entryComponents: [SuccessDialogComponent,
  ],

  exports: [RouterModule],

  imports: [
    ...MATERIAL_MODULES,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: []
})
export class PayrollModule {
}
