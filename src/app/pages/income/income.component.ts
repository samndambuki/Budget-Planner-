import { Component, inject, Input, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css',
})
export class IncomeComponent implements OnInit {
  constructor() {
    const loggedUser = sessionStorage.getItem('budgetUser');
    if (loggedUser !== null) {
      //convert to an object
      this.transactionObj.userId = JSON.parse(loggedUser).userId;
    }
  }

  openModel() {
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  closeModel() {
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'none';
    }
  }
  onSave() {}

  @Input() masterId: number = 0;

  transactionObj: any = {
    transactionId: 0,
    userId: 0,
    categoryId: 0,
    amount: 0,
    date: '2024-09-05T02:42:32.291Z',
    purpose: 'string',
    transactionTypeId: 0,
  };

  masterService = inject(MasterService);
  categoryList: any[] = [];

  ngOnInit(): void {
    this.getCategoryByUser();
  }

  getCategoryByUser() {
    this.masterService
      .getCategoryByUserId(this.transactionObj.userId)
      .subscribe((res: any) => {
        this.categoryList = res.data;
      });
  }
}
