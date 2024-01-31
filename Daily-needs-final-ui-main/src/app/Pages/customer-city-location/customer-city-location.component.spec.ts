import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCityLocationComponent } from './customer-city-location.component';

describe('CustomerCityLocationComponent', () => {
  let component: CustomerCityLocationComponent;
  let fixture: ComponentFixture<CustomerCityLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCityLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerCityLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
