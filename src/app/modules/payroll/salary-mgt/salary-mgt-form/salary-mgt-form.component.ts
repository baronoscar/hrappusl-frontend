import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SuccessDialogComponent} from "../../salary-advance/success-dialog/success-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {GeneralService} from "../../../../services/general.service";
import {SalaryMgtService} from "../salary-mgt.service";
import {Employee} from "../../employee";
import {Location} from "@angular/common";
import {Routes} from "../../../../routes/route.const";


@Component({
  selector: 'app-salary-mgt-form',
  templateUrl: './salary-mgt-form.component.html',
  styleUrls: ['./salary-mgt-form.component.scss']
})
export class SalaryMgtFormComponent implements OnInit {
  id: string | null = ""
  employee = new Employee();
  showMe: boolean = false;
  // @ts-ignore
  salaryForm: FormGroup;

  constructor(private router: Router, private dialog: MatDialog,
              private generalService: GeneralService,
              private salaryMgtService: SalaryMgtService, private activatedRoute: ActivatedRoute,
              private location: Location) {

  }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.findEmployeeById();
      this.toogleTag();
    } else {
      this.myForm();
    }


  }


  myForm() {
    this.salaryForm = new FormGroup({
      id: new FormControl(this.employee.id),
      firstName: new FormControl(this.employee.firstName,[Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]),
      lastName: new FormControl(this.employee.lastName,[Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]),
      companyRole: new FormControl(this.employee.companyRole, [Validators.required, Validators.minLength(2)]),
      payeeType: new FormControl(this.employee.payeeType ,Validators.required),
      lastPay: new FormControl(this.employee.lastPay,Validators.required),
      nextPay: new FormControl(this.employee.nextPay,Validators.required),
      salary: new FormControl(this.employee.salary, [Validators.required, Validators.minLength(1)]),
    });

  }

  backButton() {
    this.location.back();
  }

  openDialog() {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
    });
    setTimeout(() => {
      dialogRef.close();
    }, 3000);

  }

  saveButton() {
    this.salaryMgtService.save(this.salaryForm.value).subscribe((value: Employee) => {
      console.log(value);
      this.openDialog();
      this.salaryForm.reset();
      // this.router.navigate([Routes.salaryMgtList,value.id])
      this.router.navigate(['/dashboard/payroll/salary-mgt'])

    }, error => console.log(error));

  }



  cancel() {
    this.salaryForm.reset();
    this.backButton();
  }

  findEmployeeById(): void {
    this.salaryMgtService.details(Number(this.id)).subscribe(value => {
      this.employee = value
      this.myForm();
    }, error => {
      console.error(error)
    });

  }

  update() {
    this.employee = this.salaryForm.value;
    this.salaryMgtService.update(this.employee).subscribe(value => {
      // if (value){
      //
      // }
      this.openDialog();
      this.router.navigate(['/dashboard/payroll/salary-mgt'])

    },error => {
      console.log(error);
    });
  }

  toogleTag(): boolean{
    return this.showMe = !this.showMe;

  }


  onFileSelected(event: Event) {

  }
}
