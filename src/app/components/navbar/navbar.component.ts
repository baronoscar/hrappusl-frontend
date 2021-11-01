import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NotificationComponent} from "../../modules/payroll/notification/notification.component";
import {SuccessDialogComponent} from "../../modules/payroll/salary-advance/success-dialog/success-dialog.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  notifications() {

    const dialogRef = this.dialog.open(NotificationComponent, {
      height: '89vh',
      width: '317px',
      position: {top: '60px', right: '10px'}
    })
    setTimeout(() => {
      dialogRef.close();
    }, 10000);

  }

}
