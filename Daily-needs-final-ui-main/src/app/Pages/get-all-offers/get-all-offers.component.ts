import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Offer } from '../../Models/offer';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-get-all-offers',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './get-all-offers.component.html',
  styleUrl: './get-all-offers.component.css'
})
export class GetAllOffersComponent {
offers:Offer[]=[];
lid:number=1 ;
locations: Location[] = [];
productOffers:any;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
constructor(private http: HttpClient, private router: Router) {
  //this.getAllOffers(this.lid);
  //this.getAllOffers(this.id);
  this.getAllOffers();
}

getAllOffers()
{
  //console.log()
  const url = `http://localhost:5007/api/Offer/GetAllProductOffers/${this.lid}`;
  this.http.get(url, this.httpOptions).subscribe(
    (response) => {
      console.log(response)
      //lid=this.locations
      this.productOffers = response;
      console.log('Products:', this.productOffers); 
      //this.productOffers.uploadImg=localStorage.getItem('uploadImg');
    },
    (error) => {
      console.error('Error fetching products by location:', error);
    }
  );
}

delete(id:any)
{
  console.log(id);
  this.http.delete('http://localhost:5007/api/Offer/DeleteOffer/'+id,this.httpOptions)
  .subscribe((response)=>
  {
    console.log(response);
  });
  //this.getAllOffers();
  //this.getAllOffers(this.id);
  location.reload()
}
}
