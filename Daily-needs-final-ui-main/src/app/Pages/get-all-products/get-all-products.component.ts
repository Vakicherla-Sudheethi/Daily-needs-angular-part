import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../../Models/product';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-get-all-products',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './get-all-products.component.html',
  styleUrl: './get-all-products.component.css'
})
export class GetAllProductsComponent {
products:Product[]=[];
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
constructor(private http:HttpClient,private router: Router)
{
  this.getAllProducts();
}
getAllProducts()
{
  this.http
  .get<Product[]>('http://localhost:5007/api/Product/GetAllProducts',this.httpOptions)
  .subscribe((response) =>
  {
    this.products=response;
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
  this.getAllProducts();
  location.reload();
}
getId(id: any) {
  this.router.navigateByUrl('supplier-dashboard/search/' + id);
}
}