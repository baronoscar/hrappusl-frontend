import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SuccessDialogComponent} from "../success-dialog/success-dialog.component";
import {SalaryAdvanceService} from "../salary-advance.service";
import {Employee} from "../../employee";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Routes} from "../../../../routes/route.const";
import {Location} from "@angular/common";
import {SalaryAdvance} from "../salary-advance";

@Component({
  selector: 'app-salary-advance-form',
  templateUrl: './salary-advance-form.component.html',
  styleUrls: ['./salary-advance-form.component.scss']
})
export class SalaryAdvanceFormComponent implements OnInit {
  employee = new SalaryAdvance();

  // @ts-ignore
  salaryForm: FormGroup

  constructor(private route: Router, public dialog: MatDialog,
              private salaryAdvanceService: SalaryAdvanceService, private location: Location) {
  }

  ngOnInit(): void {
    this.myForm()
  }


  myForm() {
    this.salaryForm = new FormGroup({
      firstName: new FormControl(this.employee.firstName,[Validators.required, Validators.minLength(2),  Validators.pattern(/^[a-zA-Z]+$/)]),
      lastName: new FormControl(this.employee.lastName,[Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]),
      companyRole: new FormControl(this.employee.companyRole, [Validators.required, Validators.minLength(2)]),
      paymentDueDate: new FormControl(this.employee.paymentDueDate, Validators.required),
      amount: new FormControl(this.employee.amount, [Validators.required, Validators.minLength(1), Validators.pattern(/^\d+$/)]),
      repaymentPlanType: new FormControl(this.employee.repaymentPlanType, Validators.required),
      reasonForSalaryAdvance: new FormControl(this.employee.reasonForSalaryAdvance),

    });

  }


  backButton() {
    this.route.navigate(['/dashboard/payroll/salary-advance'])
  }

  save() {
    this.salaryAdvanceService.save(this.salaryForm.value).subscribe(()=>{
      console.log(this.salaryForm.value);
      this.salaryForm.reset();
      this.openDialog();
      this.backButton();

    });

  }

  openDialog() {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
    });
    setTimeout(() => {
      dialogRef.close();
    }, 3000);

  }

  cancel() {
    this.salaryForm.reset();
    this.location.back()
  }

}
