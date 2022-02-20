import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  currentEmployee: Employee = {
    firstName: '',
    lastName: '',
    designation: '',
    contact: null,
    id: null,
    address: ''
  }

  constructor(private http: HttpClient) { }
  url = '//localhost:3000/Employee';

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url, headerOption);
  }

  deleteEmployee(id: number) {
    return this.http.delete<Employee>(this.url + "/" + id, headerOption)
  }

  createEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, emp)
  }

  updateEmployee(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url + '/' + emp.id, emp)
  }
}
