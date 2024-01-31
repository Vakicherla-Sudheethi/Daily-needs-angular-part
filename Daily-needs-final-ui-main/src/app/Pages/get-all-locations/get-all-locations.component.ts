import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Location } from '../../Models/location';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { City } from '../../Models/city';
@Component({
  selector: 'app-get-all-locations',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './get-all-locations.component.html',
  styleUrl: './get-all-locations.component.css'
})
export class GetAllLocationsComponent {
  locations: Location[] = [];
  cities:City[]=[];
  cityNames: string[] = [];
  selectedCity: string = '';
  cityId: number = 0;
  lid:number=0;
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
  }

  getAllLocations() {
    this.http
      .get<Location[]>('http://localhost:5007/api/Location/GetAllLocations',this.httpOptions)
      .subscribe((response) => {
        this.locations = response;
        console.log(this.locations);
      });
  }
delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:5007/api/Location/DeleteLocation/' + id,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.getAllLocations();
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
  
getId(id: any) {
    this.router.navigateByUrl('search4/' + id);
  }
}
