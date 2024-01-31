import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,NgForm } from '@angular/forms';
import { Cart } from '../../Models/cart';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-new-cart',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-new-cart.component.html',
  styleUrl: './add-new-cart.component.css'
})
export class AddNewCartComponent {
  cartItem: Cart;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.cartItem = new Cart();
  }


  addToCart(productID:any,quantity:any) {
    this.cartItem.quantity=quantity;
    this.cartItem.productID=productID;
    this.cartItem.userID=localStorage.getItem('userID');
    this.http
      .post('http://localhost:5007/api/Cart/AddToCart', this.cartItem,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    //this.router.navigateByUrl('get-all-carts');
  }
}
