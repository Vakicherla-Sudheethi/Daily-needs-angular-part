import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent {
  
  constructor(private router: Router) {}
  newSuccess()
  {
    this.router.navigateByUrl('customer-dashboard/payment-successfull');
  }
}
