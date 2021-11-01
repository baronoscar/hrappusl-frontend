import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee-salary-component',
  templateUrl: './edit-employee-salary-component.component.html',
  styleUrls: ['./edit-employee-salary-component.component.scss']
})
export class EditEmployeeSalaryComponentComponent implements OnInit {
  edit: boolean = false;
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.snapshot.url[0].path  == 'edit' ? this.edit = true : this.edit = false;
    console.log(this.edit);
  }

}
