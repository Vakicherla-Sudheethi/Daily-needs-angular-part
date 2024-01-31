import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Login } from '../../Models/login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-all-logins',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './get-all-logins.component.html',
  styleUrl: './get-all-logins.component.css'
})
export class GetAllLoginsComponent {
logins:Login[]=[];
constructor(private http:HttpClient,private router:Router)
{
  this.getAllLogins();
}
getAllLogins()
{
  this.http
  .get<Login[]>('http://localhost:5007/api/Login/GetAllLogins')
  .subscribe((response)=>
  {
    this.logins=response;
    console.log(this.logins);
  });
}
delete(id:any)
{
  console.log(id);
  this.http.delete('http://localhost:5007/api/Login/DeleteLogin/'+id)
  .subscribe((response)=>
  {
    console.log(response);
  });
  this.getAllLogins();
  location.reload()
}
}
