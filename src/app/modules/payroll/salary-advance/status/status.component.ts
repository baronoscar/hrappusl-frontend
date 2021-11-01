import { Component, OnInit ,Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  message: string = "ChildComp"

  constructor() { }

  ngOnInit(): void {
  }

}
