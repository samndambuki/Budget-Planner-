import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ExpenseComponent } from '../expense/expense.component';
import { IncomeComponent } from '../income/income.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent, ExpenseComponent, IncomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
