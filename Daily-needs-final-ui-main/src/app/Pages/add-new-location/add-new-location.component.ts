import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '../../Models/location';
import { HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-location',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-new-location.component.html',
  styleUrl: './add-new-location.component.css'
})
export class AddNewLocationComponent {
location:Location;
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  }),
};
constructor(private http:HttpClient,private router:Router)

{
  this.location = new Location();
}
addLocation()
{
  this.http
  .post('http://localhost:5007/api/Location/AddNewLocation',this.location,this.httpOptions)
  .subscribe((response) =>
  {
    console.log(response);
  });
  this.router.navigateByUrl('get-all-locations');
}
}
