import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCartComponent } from './add-new-cart.component';

describe('AddNewCartComponent', () => {
  let component: AddNewCartComponent;
  let fixture: ComponentFixture<AddNewCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
