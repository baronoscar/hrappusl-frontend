import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopDisplaysComponent} from "../../reusables/top-displays/top-displays.component";
import {TopButtonComponent} from "../../reusables/top-button/top-button.component";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";



const SHARED_COMPONENTS = [
  TopButtonComponent,
  TopDisplaysComponent
];
const SHARED_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  NgxPaginationModule

];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_MODULES,
  ],
  imports: [
    ...SHARED_MODULES,

  ]
})
export class SharedModule {

}
