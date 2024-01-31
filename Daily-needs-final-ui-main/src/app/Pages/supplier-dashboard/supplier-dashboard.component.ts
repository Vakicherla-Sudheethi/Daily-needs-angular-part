import { Component } from '@angular/core';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
@Component({
  selector: 'app-supplier-dashboard',
  standalone: true,
  imports: [CommonModule,  RouterOutlet, RouterLink],
  templateUrl: './supplier-dashboard.component.html',
  styleUrl: './supplier-dashboard.component.css'
})
export class SupplierDashboardComponent {
  constructor(private router:Router)
  {
  }
    logOut()
    {
      this.router.navigateByUrl('login');
    }
  
}
