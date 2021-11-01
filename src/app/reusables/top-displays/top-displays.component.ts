import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-displays',
  templateUrl: './top-displays.component.html',
  styleUrls: ['./top-displays.component.scss']
})
export class TopDisplaysComponent implements OnInit {
  @Input('textToDisplay') textToDisplay: string = '';
  @Input('count') count: string = '';
  @Input('classes') classes: string = '';
  @Input('imageRoute') imageRoute = '';
  constructor() { }

  ngOnInit(): void {
  }

}
