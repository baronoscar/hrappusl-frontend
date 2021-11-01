import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {GeneralService} from './services/general.service';
import {SharedModule} from "./modules/shared/shared.module";
import {PayrollModule} from "./modules/payroll/payroll.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PayrollModule,


  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
