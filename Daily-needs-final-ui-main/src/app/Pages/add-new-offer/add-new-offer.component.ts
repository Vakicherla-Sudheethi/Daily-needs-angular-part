import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Offer } from '../../Models/offer';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Router} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-new-offer',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-new-offer.component.html',
  styleUrl: './add-new-offer.component.css'
})
export class AddNewOfferComponent {
offer:Offer;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
constructor(private http: HttpClient, private router: Router)
{
  this.offer = new Offer();
}
addOffer()
{
  this.http
  .post('http://localhost:5007/api/Offer/AddNewOffer',this.offer,this.httpOptions)
  .subscribe((response)=>
  {
    console.log(response);
  });
  this.router.navigateByUrl('supplier-dashboard/get-all-offers');
}
}
