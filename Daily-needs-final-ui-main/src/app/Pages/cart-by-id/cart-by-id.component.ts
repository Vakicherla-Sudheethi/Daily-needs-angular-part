import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cart } from '../../Models/cart';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart-by-id',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cart-by-id.component.html',
  styleUrl: './cart-by-id.component.css'
})
export class CartByIdComponent {
  cartId?: number = 0;
  cartItem: Cart;
  errMsg: string = '';
  isCartExist: boolean = false;
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.cartItem = new Cart();
    this.activateRoute.params.subscribe((p) => (this.cartId = p['cid']));
    console.log(this.cartId);
    this.search();
  }
  
  search() {
    this.http
      .get<Cart>('http://localhost:5007/api/Cart/GetByCartId/' + this.cartId)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.cartItem = response;
          this.isCartExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Cart ID';
          this.isCartExist = false;
        }
      });
  }
  
  edit(id: any) {
    console.log(id);
    this.http
      .put('http://localhost:5007/api/Cart/UpdateCartItem/' + id, this.cartItem)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('get-all-carts');
  }
  
}
