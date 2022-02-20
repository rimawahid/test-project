import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static addUser(formValues: any) {
    throw new Error('Method not implemented.');
  }
  
  

  constructor(private http:HttpClient) { }

  url:string="http://localhost:3000/users";

  addUser(user:User) {
    this.http.post(this.url, user).toPromise();
  }

}
