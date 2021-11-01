import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralService} from "../../../../services/general.service";
import {SalaryAdvanceService} from "../salary-advance.service";
import {SalaryAdvance} from "../salary-advance";

@Component({
  selector: 'app-salary-advance-list',
  templateUrl: './salary-advance-list.component.html',
  styleUrls: ['./salary-advance-list.component.scss']
})
export class SalaryAdvanceListComponent implements OnInit {

  employees: SalaryAdvance[] = [];
  cp: any;


  constructor(private router: Router, public generalService: GeneralService,
              private salaryAdvanceService: SalaryAdvanceService) {
  }

  ngOnInit(): void {
    this.salaryAdvanceList();
  }

  createSalaryAdvance() {
    this.router.navigate(['/dashboard/payroll/salary-advance/create'])
  }

  details(id: number) {
    this.salaryAdvanceService.details(id);
    this.router.navigate(['/dashboard/payroll/salary-advance/details'])
  }

  salaryAdvanceList(): void {
    this.salaryAdvanceService.getSalaryAdvanceList().subscribe(value => {
      this.employees = value
    });
  }

  delete(id: number): any {
// @ts-ignore
    this.salaryAdvanceService.delete(id).subscribe((data: any[]) => {
      console.log(data);
      this.salaryAdvanceList();
    });
  }
}
