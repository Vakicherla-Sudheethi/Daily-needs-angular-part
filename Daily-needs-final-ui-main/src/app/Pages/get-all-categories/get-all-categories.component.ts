import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Category } from '../../Models/category';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-get-all-categories',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './get-all-categories.component.html',
  styleUrl: './get-all-categories.component.css'
})
export class GetAllCategoriesComponent {
categories:Category[]=[];
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};

constructor(private http: HttpClient, private router: Router) {
  this.getAllCategories();
}

getAllCategories()
{
  this.http
  .get<Category[]>('http://localhost:5007/api/Category/GetAllCategories',this.httpOptions)
  .subscribe((response)=>
  {
    this.categories=response;
    console.log(this.categories);
  });
}
delete(id:any)
{
  this.http.delete('http://localhost:5007/api/Category/DeleteCategory/'+id,this.httpOptions)
  .subscribe((response)=>
  {
    this.getAllCategories();
  });
}

}
