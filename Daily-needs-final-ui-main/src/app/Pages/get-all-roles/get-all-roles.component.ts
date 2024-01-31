import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Role } from '../../Models/role';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-all-roles',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './get-all-roles.component.html',
  styleUrl: './get-all-roles.component.css'
})
export class GetAllRolesComponent {
  roles: Role[] = [];

constructor(private http: HttpClient, private router: Router) {
  this.getAllRoles();
}

getAllRoles() {
  this.http
    .get<Role[]>('http://localhost:5007/api/Role/GetAllRoles')
    .subscribe((response) => {
      this.roles = response;
      console.log(this.roles);
    });
}

delete(id: any) {
  console.log(id);
  this.http
    .delete('http://localhost:5007/api/Role/DeleteRole/' + id)
    .subscribe((response) => {
      console.log(response);
    });
  this.getAllRoles(); 
  location.reload(); 
}

getId(id: any) {
  this.router.navigateByUrl('search/' + id); 
}


}
