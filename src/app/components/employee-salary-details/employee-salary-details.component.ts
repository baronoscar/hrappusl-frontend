import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-employee-salary-details',
  templateUrl: './employee-salary-details.component.html',
  styleUrls: ['./employee-salary-details.component.scss']
})
export class EmployeeSalaryDetailsComponent implements OnInit {

  constructor(public router: Router, public generalservice: GeneralService) { }

  ngOnInit(): void {
  }

}
