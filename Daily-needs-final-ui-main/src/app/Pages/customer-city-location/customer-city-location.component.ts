import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Location } from '../../Models/location';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { City } from '../../Models/city';
import { Product } from '../../Models/product';
import { Cart } from '../../Models/cart';
import { Offer } from '../../Models/offer';
@Component({
  selector: 'app-customer-city-location',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './customer-city-location.component.html',
  styleUrl: './customer-city-location.component.css'
})
export class CustomerCityLocationComponent {
  locations: Location[] = [];
  cities:City[]=[];
  products:Product[]=[];
  cityNames: string[] = [];
  selectedCity: string = '';
  cityId: number = 0;
  lid:number=0;
  pid:number=0;
  cart:any=0;
  cartItem: Cart;
  offer:Offer[]=[];
  // product:Product;
  //newly added
  quantityOptions: number[] = [1, 2, 3, 4, 5];
  qty:number=0;
  productOffers:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.getAllCities();
    this.getAllLocations();
    this.getLocationsByCityId();
    //this.getProductsByLocation()
    this.cartItem =new Cart();
    const Qty=this.qty;
    // this.product=new Product();
  }
  selectQty(e: any) {
    this.qty = e.target.value;
    console.log(this.qty);
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

  getLocationsByCityId() {
    const url = `http://localhost:5007/api/Location/GetLocationsByCityId/${this.cityId}`;
  
  this.http.get<Location[]>(url, this.httpOptions).subscribe(
    (response) => {
      this.locations = response;
      console.log(this.locations);
      this.selectedCity = this.cityId.toString();
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
    } else {
      this.getAllLocations();
    }
  }

//for  products
getProductsByLocation() {
  //this.productOffers.uploadImg=localStorage.getItem('uploadImg');
  const url = `http://localhost:5007/api/Offer/GetAllProductOffers/${this.lid}`;
  this.http.get(url, this.httpOptions).subscribe(
    (response) => {
      this.productOffers = response;
      console.log('Products:', this.productOffers); 
      this.productOffers.uploadImg=localStorage.getItem('uploadImg');
    },
    (error) => {
      console.error('Error fetching products by location:', error);
    }
  );
}

addToCart(productID:any) {
  this.cartItem.quantity=this.qty;
  this.cartItem.productID=productID;
  this.cartItem.userID=localStorage.getItem('userId');
  
  console.log(this.cartItem);
  this.http
    .post('http://localhost:5007/api/Cart/AddToCart', this.cartItem,this.httpOptions)
    .subscribe((response) => {
      console.log(response);
    });
  
  this.router.navigateByUrl('customer-dashboard/get-all-carts');
}
}

