import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GeneralService} from "../../../../services/general.service";
import {SalaryMgtService} from "../salary-mgt.service";
import {Employee} from "../../employee";


@Component({
  selector: 'app-salary-mgt-list',
  templateUrl: './salary-mgt-list.component.html',
  styleUrls: ['./salary-mgt-list.component.scss']
})
export class SalaryMgtListComponent implements OnInit {
  employees: Employee[] = [];
  cp: any;
  searchByFirstName?: string;
  newEmp: Employee[] = [];
  TotalWages: number = 0;


  constructor(private router: Router, public generalService: GeneralService,
              private salaryMgtService: SalaryMgtService) {
  }

  ngOnInit(): any {
    this.salaryMgtList();
  }

  addEmployee() {
    this.router.navigate(['/dashboard/payroll/salary-mgt/create'])
  }


  salaryMgtDetails() {
    this.router.navigate(['/dashboard/payroll/salary-mgt/details'])
  }

  salaryMgtList(): void {
    this.salaryMgtService.getSalaryMgtList().subscribe(value => {
      this.employees = value
      this.newEmp = value
      this.TotalWages = this.totalSalary()
    });
  }

  totalSalary() {
    let totalWages = 0
    if (this.newEmp.length > 0) {
      totalWages = this.newEmp.map(value => value.salary!).reduce((previousValue, currentValue) => {
        return previousValue + currentValue
      }, 0)
    }
    return totalWages;
  }


}
