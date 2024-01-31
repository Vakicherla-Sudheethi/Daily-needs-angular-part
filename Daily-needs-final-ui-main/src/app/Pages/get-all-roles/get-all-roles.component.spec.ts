import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRolesComponent } from './get-all-roles.component';

describe('GetAllRolesComponent', () => {
  let component: GetAllRolesComponent;
  let fixture: ComponentFixture<GetAllRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllRolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
