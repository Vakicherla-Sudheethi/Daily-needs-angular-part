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
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
constructor(private http: HttpClient, private router: Router) {
  this.getAllOffers();
}

getAllOffers()
{
  this.http
  .get<Offer[]>('http://localhost:5007/api/Offer/GetAllOffers',this.httpOptions)
  .subscribe((response) => {
    this.offers = response;
    console.log(this.offers);
  });
}

delete(id:any)
{
  console.log(id);
  this.http.delete('http://localhost:5007/api/Offer/DeleteOffer/'+id,this.httpOptions)
  .subscribe((response)=>
  {
    console.log(response);
  });
  this.getAllOffers();
  location.reload()
}
}
