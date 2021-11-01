import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SalaryMgtService} from "../salary-mgt.service";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-salary-mgt-details',
  templateUrl: './salary-mgt-details.component.html',
  styleUrls: ['./salary-mgt-details.component.scss']
})
export class SalaryMgtDetailsComponent implements OnInit {
  id: string | null = ""
  salaryData: any

  constructor(private router: Router, private salaryMgtServices: SalaryMgtService,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.getSalaryMgtDetails();

  }
  editButton() {
    this.router.navigate(['/dashboard/payroll/salary-mgt/create'])

  }
  backButton() {
    this.router.navigate(['/dashboard/payroll/salary-mgt'])
  }

  getSalaryMgtDetails(): void{
    this.salaryMgtServices.details(Number(this.id)).subscribe( value => {
      this.salaryData = value
    },);
  }
}
