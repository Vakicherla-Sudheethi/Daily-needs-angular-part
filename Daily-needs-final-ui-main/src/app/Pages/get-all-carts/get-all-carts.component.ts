import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Cart } from '../../Models/cart';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-get-all-carts',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './get-all-carts.component.html',
  styleUrl: './get-all-carts.component.css'
})
export class GetAllCartsComponent {
cartItems:any[]=[];
 quantity:number =0;
 total:number=0;
totalCartPrice:number=0;
//newly-added
carts1:any[]= [];
qty:number=0;
gtotal: number = 0;
rowcount: number = 0;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.getAllCartItems();
    
  }

  selectQty(e: any) {
    this.quantity = e.target.value;
  }
  setTotal() {
    this.gtotal = 0; 
    this.rowcount = 0;
    for (let item of this.carts1) {
      this.gtotal += item.totalPrice;
      this.rowcount++;
    }
  }

  getAllCartItems() {
  let userID=localStorage.getItem('userId');
  // this.cartItems.uploadImg=localStorage.getItem('uploadImg');
    this.http
      .get<Cart[]>('http://localhost:5007/api/Cart/GetAllCartsByUser/'+ userID,this.httpOptions) 
      .subscribe((response) => {
        
        this.cartItems = response;
        console.log(this.cartItems);
        for (let item of this.cartItems) {

          this.carts1.push({
            uploadImg:item.uploadImg,
            cartID:item.cartID,
            productName: item.productName,
            price: item.price,
            offerPercentage: item.offerPercentage,
            discountedPrice: item.price - (item.price * item.offerPercentage/100),
            quantity: item.quantity,
            totalPrice: (item.price - (item.price * item.offerPercentage/100)) * item.quantity,
          });
        }
        console.log(this.carts1);
      });
  }

  deleteCartItem(id:any) {
    console.log(id);
    this.http
      .delete('http://localhost:5007/api/Cart/RemoveFromCart/'+id,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.getAllCartItems();
    location.reload();
      
      
  }

  buyProduct()
  {
    this.router.navigateByUrl('customer-dashboard/payment-page');
  }
getTotal()
{
  for(let cart of this.cartItems)
  {
     this.total+=cart.totalPrice;
  }
  return this.total;
}


  getId(id:any)
  {
    this.router.navigateByUrl('search3/'+ id);
  }
}
