import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User;
  email: string ='';
  password: string ='';
  errMsg: string ='';
  httpResponse: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  }
  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }

  onSubmit(): void {
    let login = { email: this.user.email, password: this.user.password };
    console.log(login);
    this.http
      .post('http://localhost:5007/api/User/Validate',login,this.httpOptions)
      .subscribe((response) => {
        this.httpResponse = response;
        console.log(this.httpResponse);
        if (this.httpResponse.token != null) {
          //store token in local storage
          console.log(this.httpResponse.token);
          localStorage.setItem('token', this.httpResponse.token);
          localStorage.setItem('userId', this.httpResponse.userID);
          
          //console.log(this.httpResponse.roleId);
          if (this.httpResponse.roleId == 3 ) {
            console.log(this.httpResponse.roleId);
            //redirect to customer dashboard
            this.router.navigateByUrl('customer-dashboard');
          } else if (this.httpResponse.roleId == 1 ) {
            // console.log(this.httpResponse.token);
          this.router.navigateByUrl('admin-dashboard');
          }
          else if (this.httpResponse.roleId == 2)
          {
            this.router.navigateByUrl('supplier-dashboard');
          }
        } else {
          this.errMsg = 'Invalid Credentials';
          console.log(this.errMsg);
        }
      });
  
  }
  onRegister(form:NgForm): void {
    this.router.navigateByUrl('user'); 
  }

  onReset(form: NgForm): void {
    form.reset();
  }

}
