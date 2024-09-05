import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css',
})
export class ExpenseComponent {
  constructor() {}
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

  //input is used to pass the data
  @Input() masterId: number = 0;
}
