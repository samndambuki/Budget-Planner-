import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isLogin: boolean = true;
  register: any = {
    userId: 0,
    userName: '',
    emailId: '',
    fullName: '',
    role: '',
    createdDate: new Date(),
    password: '',
  };

  masterService = inject(MasterService);
  createUser() {
    debugger;
    this.masterService.createUser(this.register).subscribe((res: any) => {
      if (res.result) {
        alert('User Created');
      } else {
        alert(res.message);
      }
    });
  }
}
