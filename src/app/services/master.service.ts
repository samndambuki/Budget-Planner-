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

  getAllTransactionType() {
    return this.http.get(`${this.apiURL}GetAllTransactionType`);
  }

  getCategoryByUserId(id: number) {
    return this.http.get(`${this.apiURL}GetCategoryByUserId?userId=${id}`);
  }

  addNewTransaction(obj: any) {
    return this.http.post(`${this.apiURL}AddNewTransaction`, obj);
  }
}
