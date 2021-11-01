import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.scss']
})
export class LeaveBalanceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  actOnEmittedValues(event: any){
    console.log(event);
    this.router.navigate(['dashboard',`${event}`]);
  }

}
