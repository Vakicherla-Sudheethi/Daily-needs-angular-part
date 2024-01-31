import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Category } from '../../Models/category';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-new-category',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-new-category.component.html',
  styleUrl: './add-new-category.component.css'
})
export class AddNewCategoryComponent {
category:Category;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
constructor(private http: HttpClient, private router: Router)
{
  this.category = new Category();
}

addCategory()
{
  this.http
  .post('http://localhost:5007/api/Category/AddNewCategory',this.category,this.httpOptions)
  .subscribe((response)=>
  {
    console.log(response);
  });
  this.router.navigateByUrl('supplier-dashboard/get-all-categories');
}
}
