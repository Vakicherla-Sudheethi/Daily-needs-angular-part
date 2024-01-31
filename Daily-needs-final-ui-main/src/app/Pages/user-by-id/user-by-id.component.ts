import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../Models/user';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-by-id',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './user-by-id.component.html',
  styleUrl: './user-by-id.component.css'
})
export class UserByIdComponent {
  userId?: number = 0;
  user: User;
  errMsg: string = '';
  isUserExist: boolean = false;

  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.user = new User();
    this.activateRoute.params.subscribe((p) => (this.userId = p['mid']));
    console.log(this.userId);
    this.search();
  }
  search() {
    this.http
      .get<User>('http://localhost:5007/api/User/GetUserById/' + this.userId)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.user = response;
          this.isUserExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid User Id';
          this.isUserExist = false;
        }
      });
  }
  edit(id:any) {
    console.log(id);
    this.http
      .put('http://localhost:5007/api/User/UpdateUser/'+ id , this.user)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('get-all-users'); 
  }
  // delete(id: any) {
  //   console.log(id);
  //   this.http
  //     .delete('http://localhost:5007/api/User/DeleteUser/' + id)
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  
}

