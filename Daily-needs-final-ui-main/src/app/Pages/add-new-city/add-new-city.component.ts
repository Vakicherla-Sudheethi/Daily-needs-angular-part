import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { City } from '../../Models/city';
import { HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-city',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-new-city.component.html',
  styleUrl: './add-new-city.component.css'
})
export class AddNewCityComponent {
city:City;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
constructor(private http: HttpClient, private router: Router)
{
  this.city = new City();
}
addCity()
{
  this.http
  .post('http://localhost:5007/api/City/AddNewCity',this.city,this.httpOptions)
  .subscribe((response) =>
  {
    console.log(response);
    // this.router.navigateByUrl('/get-all-user');
  });
  
}
}
