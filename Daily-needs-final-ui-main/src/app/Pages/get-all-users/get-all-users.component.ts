import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../Models/user';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-get-all-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './get-all-users.component.html',
  styleUrl: './get-all-users.component.css'
})
export class GetAllUsersComponent {
  users: User[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http
      .get<User[]>('http://localhost:5007/api/User/GetAllUsers',this.httpOptions) 
      .subscribe((response) => {
        this.users = response;
        console.log(this.users);
      });
  }
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:5007/api/User/DeleteUser/' + id,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.getAllUsers();
  }
  getId(id: any) {
    this.router.navigateByUrl('search/' + id);
  }
  

}
