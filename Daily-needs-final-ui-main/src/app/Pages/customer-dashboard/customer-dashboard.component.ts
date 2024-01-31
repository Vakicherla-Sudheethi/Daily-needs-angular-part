import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
}from '@angular/common/http';
@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule,  RouterOutlet, RouterLink],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {
constructor(private router:Router)
{
}
  logOut()
  {
    this.router.navigateByUrl('login');
  }

}
