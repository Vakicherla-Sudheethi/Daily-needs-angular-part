import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCityComponent } from './add-new-city.component';

describe('AddNewCityComponent', () => {
  let component: AddNewCityComponent;
  let fixture: ComponentFixture<AddNewCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
