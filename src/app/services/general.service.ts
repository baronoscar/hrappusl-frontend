import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  goToLeaveRequest(router: Router, route?: string){
    route ? router.navigate(['dashboard', 'leave', `${route}`]) : router.navigate(['dashboard', 'leave', 'approved']);   
  }

  goToPayrollRoutes(router: Router, route: string){
    router.navigateByUrl(route);
  }

  // gotoEmployeeDetails(router: Router, route: string){
  //   router.navigateByUrl(route);
  // }
}
