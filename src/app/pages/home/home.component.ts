import { Component, inject, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ExpenseComponent } from '../expense/expense.component';
import { IncomeComponent } from '../income/income.component';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent, ExpenseComponent, IncomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  selectedTab: string = 'Dashboard';
  incomeMasterId: number = 0;
  expenseMasterId: number = 0;
  transactionList: any[] = [];
  changeTab(tab: string) {
    this.selectedTab = tab;
  }
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getTransactionType();
  }
  getTransactionType() {
    this.masterService.getAllTransactionType().subscribe((res: any) => {
      this.transactionList = res.data;
      const income = this.transactionList.find((m) => m.masterName == 'income');
      if (income) {
        this.incomeMasterId = income.masterId;
      }
      const expense = this.transactionList.find(
        (m) => m.masterName == 'Expense'
      );
      if (expense) {
        this.expenseMasterId = expense.masterId;
      }
    });
  }
}
