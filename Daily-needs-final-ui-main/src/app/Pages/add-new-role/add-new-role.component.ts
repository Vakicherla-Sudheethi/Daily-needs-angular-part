import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Role } from '../../Models/role';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new-role',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './add-new-role.component.html',
  styleUrl: './add-new-role.component.css'
})
export class AddNewRoleComponent {
  role:Role;
  constructor(private http:HttpClient,private router:Router)
  {
    this.role=new Role();
  }
  addRole()
  {
    this.http
    .post('http://localhost:5007/api/Role/AddNewRole',this.role)
    .subscribe((response) =>
    {
      console.log(response);
    });
    this.router.navigateByUrl('get-all-roles'); 
  }

}
