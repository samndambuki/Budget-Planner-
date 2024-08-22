import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiURL: string = 'https://projectapi.gerasim.in/api/BudgetPlanner/';
  constructor(private http: HttpClient) {}
  createUser(obj: any) {
    return this.http.post(`${this.apiURL}AddNewUser`, obj);
  }

  loginUser(obj: any) {
    return this.http.post(`${this.apiURL}login`, obj);
  }
}
