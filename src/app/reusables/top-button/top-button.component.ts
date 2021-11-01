import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss']
})
export class TopButtonComponent implements OnInit {
  @Input('text') text = '';
  @Input('class') class = "";
  @Input('iconSource') iconSource = '';
  @Output() eventEmitted = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }


  emitAnEvent(){
    this.eventEmitted.emit('leave-application');
  }



}
