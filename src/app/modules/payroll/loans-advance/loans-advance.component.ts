import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SuccessDialogComponent} from "../salary-advance/success-dialog/success-dialog.component";

@Component({
  selector: 'app-loans-advance',
  templateUrl: './loans-advance.component.html',
  styleUrls: ['./loans-advance.component.scss']
})
export class LoansAdvanceComponent implements OnInit {

  constructor(private route: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  backButton(){
    this.route.navigate(['/dashboard/payroll/salary-advance'])
  }

/*
  save(){
    this.openDialog();
    // this.route.navigate(['/salary-advance-details'])
  }
*/

/*
  openDialog() {
    this.dialog.open(SuccessDialogComponent);
    /!* const dialogRef =
       this.dialog.open(SuccessDialogComponent);
     dialogRef.afterClosed().subscribe(val => console.log(val));*!/

// SETTING TIMER TO THE MAT DIALOG

    /!*
        const dialogRef = this.dialog.open(SuccessDialogComponent, {
          width: '450px',
          height: '200px'
        });
        setTimeout(() => {
          dialogRef.close();
        }, 10000);*!/

  }
*/

  applyLoans() {
    this.route.navigate(['/dashboard/payroll/salary-advance/create'])

  }
}
