import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SalaryAdvanceService} from "../salary-advance.service";
import {SuccessDialogComponent} from "../success-dialog/success-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-salary-advance-details',
  templateUrl: './salary-advance-details.component.html',
  styleUrls: ['./salary-advance-details.component.scss']
})
export class SalaryAdvanceDetailsComponent implements OnInit {
  id: string | null = ""
  salaryData: any
  showMe: boolean = false;


  constructor(private route: Router, public dialog: MatDialog, private salaryAdvanceService: SalaryAdvanceService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.getSalaryAdvanceDetails()
  }

  backButton() {
    this.route.navigate(['/dashboard/payroll/salary-advance'])

  }

  getSalaryAdvanceDetails(): void {
    this.salaryAdvanceService.details(Number(this.id)).subscribe(value => {
        console.log(value)
        this.salaryData = value
      },
      error => {
      });
  }


  approve(id: number) {
    this.salaryAdvanceService.approve(Number(this.id)).subscribe(
      value => {
        console.log(id)
        console.log("approved baron")
        this.toogleTag();
      },
      error => {
      })
  }

  rejected(id: number) {
    this.salaryAdvanceService.rejected(Number(this.id)).subscribe(
      value => {
        console.log(id)
        console.log("rejected baron")
        this.toogleTagDis();
      },
      error => {
      })
  }

  toogleTag(): boolean {
    return this.showMe = !this.showMe;
  }

  toogleTagDis(): boolean {
    return this.showMe = !this.showMe;
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(SuccessDialogComponent, {});
  //   setTimeout(() => {
  //     dialogRef.close();
  //   }, 3000);
  //
  // }


}
