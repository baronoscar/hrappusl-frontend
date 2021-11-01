import { Routes } from "@angular/router";
import { AllEmployeesComponent } from "../components/all-employees/all-employees.component";
import { EditEmployeeSalaryComponentComponent } from "../components/edit-employee-salary-component/edit-employee-salary-component.component";
import { EmployeeSalaryDetailsComponent } from "../components/employee-salary-details/employee-salary-details.component";


export const salaryChildrenRoutes: Routes = [
    { path: 'all', component: AllEmployeesComponent},
    {path: 'details', component: EmployeeSalaryDetailsComponent },
    {path: 'add', component: EditEmployeeSalaryComponentComponent },
    {path: 'edit', component: EditEmployeeSalaryComponentComponent },
]