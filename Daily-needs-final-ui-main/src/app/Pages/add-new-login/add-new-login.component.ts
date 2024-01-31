import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,NgForm } from '@angular/forms';
import { Login } from '../../Models/login';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-new-login.component.html',
  styleUrl: './add-new-login.component.css'
})
export class AddNewLoginComponent {
login:Login;
constructor(private http:HttpClient,private router:Router)
{
  this.login = new Login();
}

addLogin()
{
  this.http
  .post('http://localhost:5007/api/Login/AddNewLogin',this.login)
  .subscribe((response)=>
  {
    console.log(response);
  });
  this.router.navigateByUrl('get-all-logins');
}
}
