import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { GeneralAlertComponent } from '../general-alert/general-alert.component';
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  submitLeaveForm(event: any){
    const config: MatDialogConfig = {
      width: '38vw',
      height: '38 vh',
    }
   const dailogRef =  this.dialog.open(GeneralAlertComponent, config);

   dailogRef.afterClosed().subscribe(
     val => console.log(val),
   )
  }

}
