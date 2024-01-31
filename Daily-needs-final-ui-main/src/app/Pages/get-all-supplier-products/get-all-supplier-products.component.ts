import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../Models/product';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-get-all-supplier-products',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './get-all-supplier-products.component.html',
  styleUrl: './get-all-supplier-products.component.css'
})
export class GetAllSupplierProductsComponent {
  products: Product[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient,private router: Router) {
    this.getAllSupplierProducts(localStorage.getItem('userId'));

  }

  getAllSupplierProducts(userID:any) {
    console.log(this.products);
    const apiUrl = 'http://localhost:5007/api/Product/GetProductsByUserId/'+userID;

    this.http.get<Product[]>(apiUrl, this.httpOptions).subscribe((response) => {
      this.products = response;
      console.log(this.products);
    });
  }
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:5007/api/Product/DeleteProduct/' + id,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
      location.reload()
    }

    edit(id:any)
    {
      //const productId = 'product';
      this.router.navigateByUrl('supplier-dashboard/search/'+ id );
    }
    

}
