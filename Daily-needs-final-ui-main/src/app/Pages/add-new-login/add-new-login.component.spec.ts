import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewLoginComponent } from './add-new-login.component';

describe('AddNewLoginComponent', () => {
  let component: AddNewLoginComponent;
  let fixture: ComponentFixture<AddNewLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
