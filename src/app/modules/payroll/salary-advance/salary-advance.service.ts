import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../employee";
import {Observable} from "rxjs";
import {SalaryAdvance} from "./salary-advance";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class SalaryAdvanceService {
  myApiUrl = 'http://localhost:8080/api/salary-advance';

  constructor(private httpClient: HttpClient) {
  }

  getSalaryAdvanceList(): Observable<any> {
    return this.httpClient.get(this.myApiUrl)
  }

  save(employee: SalaryAdvance): any {
    return this.httpClient.post(this.myApiUrl, employee);
    console.log(employee);
    console.log("My salary advance form successful");

  }

  approve(id: number){
    return this.httpClient.get<any>(`${this.myApiUrl}/approve/${id}`)

  }

  delete(id: number) {
    return this.httpClient.delete<void>(`${this.myApiUrl}/delete/${id}`);
  }

  details(id: number): Observable<any> {
    return this.httpClient.get(`${this.myApiUrl}/${id}`)
  }

  rejected(id: number){
    return this.httpClient.get<any>(`${this.myApiUrl}/rejected/${id}`)
  }

}
