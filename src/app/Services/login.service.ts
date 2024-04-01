import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:9090/employees';
  private addbaseUrl = 'http://localhost:9090/employees/login';
  constructor(private http: HttpClient) { }

  login(userData:any): Observable<any> {
    console.log('userData',userData)
    let payload = {
      "eamil": userData.email,
      "password": userData.password,
    }
    return this.http.post<any>(`${this.addbaseUrl}`, payload);
  }

addEmployee(employeeData: any): Observable<any> {
  console.log('employeeData',employeeData)
  return this.http.post(this.baseUrl, employeeData);
}

}
