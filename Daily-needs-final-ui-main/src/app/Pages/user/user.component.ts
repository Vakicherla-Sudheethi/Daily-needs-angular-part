import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import * as emailjs from 'emailjs-com';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // 
  user: User;
  username: string = '';
  email: string = '';
  password: string = '';
  errMsg: string = '';
  httpResponse: any;
  selectedRole: number =0;

  // Mapping of role names to their respective values
  roleMap: { key: string, value: number }[] = [
    { key: 'User', value: 3 },
    { key: 'Admin', value: 1 },
    {key: 'Supplier',value: 2},
  ];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }

  onSubmit(): void {
        //userID:0,
        this.user.username= this.username;
        this.user.email=this.email;
        this.user.password=this.password;
        this.user.roleID=Number(this.selectedRole);
        console.log(this.user);
      this.http
        .post('http://localhost:5007/api/User/AddNewUser', this.user,this.httpOptions)
        .subscribe((response) => {
          this.httpResponse = response;
          console.log(this.httpResponse);
          this.sendEmail();
        });
        //this.sendEmail();
        this.router.navigateByUrl('login');
    
  }
  onReset(form: NgForm): void {
    form.reset();
  }
  sendEmail() {
    const templateParams = {
      to_name: this.user.username,
      from_name: 'Daily Needs',
      to_mail: this.user.email
    };
  emailjs.init("FKj4c2g5g2Rj312oJ");
  emailjs.send('service_q14jvf7', 'template_6z304bm', templateParams)
    .then((response) => {
      console.log('Email sent successfully:', response);
    }, (error) => {
      console.error('Error sending email:', error);
    });
}
}
