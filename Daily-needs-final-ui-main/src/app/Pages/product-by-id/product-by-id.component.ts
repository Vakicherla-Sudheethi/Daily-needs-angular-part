import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Models/product';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-product-by-id',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './product-by-id.component.html',
  styleUrl: './product-by-id.component.css'
})
export class ProductByIdComponent {
  productId?: number = 0;
  product: Product;
  errMsg: string = '';
  isProductExist: boolean = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.product = new Product();
    this.activateRoute.params.subscribe((p) => (this.productId = p['pid']));
    console.log(this.productId);
    this.search1();
  }

search1() {
    this.http
      .get<Product>('http://localhost:5007/api/Product/GetProductById/' + this.productId,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.product = response;
          this.isProductExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Product Id';
          this.isProductExist = false;
        }
      });
  }

edit(id: any) {
    console.log(id);
    this.http
      .put('http://localhost:5007/api/Product/UpdateProduct/' + id, this.product,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        
      });
    this.router.navigateByUrl('supplier-dashboard/get-all-supplier-products');
    }
    getId(id: any) {
      this.router.navigateByUrl('supplier-dashboard/search/' + id);
    }
}
