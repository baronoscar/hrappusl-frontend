import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../employee";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SalaryMgtService {
  myApiUrl = 'http://localhost:8080/api/employee';

  constructor(private httpClient: HttpClient) {
  }


  getSalaryMgtList(): Observable<any> {
    return this.httpClient.get(this.myApiUrl)
  }

  save(employee: Employee): Observable<any> {
    return this.httpClient.post(this.myApiUrl, employee);
  }

  details(id: number): Observable<any> {
    return this.httpClient.get(`${this.myApiUrl}/${id}`)
  }
  update(employee: Employee): Observable<any> {
    return this.httpClient.post(`${this.myApiUrl}/edit`, employee);
  }
}

