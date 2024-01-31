import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Models/product';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { Category } from '../../Models/category';
import { City } from '../../Models/city';
import { Location } from '../../Models/location';
@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,UploadImageComponent],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.css'
})
export class AddNewProductComponent {
product:Product;
categories: any[] = [];

cityNames: string[] = [];
locationNames: string[] = [];

cities: City[] = [];
locations: Location[] = [];
selectedCity: string = '';

cityId: number = 0;
lid:number=0;

price :number = 0 ;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
constructor(private http: HttpClient, private router: Router)
{
  this.product = new Product();
  this.product.price = this.price;
  this.http
  .get<any[]>('http://localhost:5007/api/Category/GetAllCategories', this.httpOptions)
  .subscribe((response) => {
    this.categories = response;
    console.log(response);
  });
  this.getAllCities();
  this.getAllLocations();  
  //this.getLocationsByCityId();

}

addProduct()
{
  this.product.uploadImg = localStorage.getItem('uploadImg');
  console.log(this.product);
  // const userId = localStorage.getItem('userID');
  this.product.userID = Number(localStorage.getItem('userId'));
  this.product.price = this.price;
  this.http
  .post('http://localhost:5007/api/Product/AddNewProduct',this.product,this.httpOptions)
  .subscribe((response) =>
  {
    console.log(response);
  });
  this.router.navigateByUrl('supplier-dashboard/get-all-supplier-products');

}

validatePrice() {
  if (this.product.price !== undefined && (this.product.price === null || this.product.price < 0)) {
    // Set a default positive value or handle it based on your application logic
    window.alert('Please enter only positive values for the price.');
    // Reset the price to a default value or leave it unchanged based on your logic
    this.product.price = Math.abs(this.price);
  }
}



getAllLocations() {
  this.http
    .get<Location[]>('http://localhost:5007/api/Location/GetAllLocations',this.httpOptions)
    .subscribe((response) => {
      this.locations = response;
      console.log(this.locations);
    });
}
getAllCities()
{
this.http
    .get<City[]>('http://localhost:5007/api/City/GetAllCities',this.httpOptions)
    .subscribe((response) => {
      this.cities = response;
      console.log(this.cities);
    });
}

getLocationsByCityId(cid:number) {
this.http.get<Location[]>('http://localhost:5007/api/Location/GetLocationsByCityId/'+ cid, this.httpOptions)
.subscribe(
  (response) => {
    this.locations = response;
    console.log(response);
    this.selectedCity = this.cityId.toString();
    console.log(this.selectedCity);
  },
  (error) => {
    console.error('Error fetching locations:', error);
  }
);
}
onCityChange(city: string) {
  this.selectedCity = city;
    console.log(this.selectedCity);
    if (city) {
      this.locations = this.locations.filter((location) => location.cityId?.toString()=== city);
      console.log(this.locations);
    } else {
      this.getAllLocations();
    }
}

}
