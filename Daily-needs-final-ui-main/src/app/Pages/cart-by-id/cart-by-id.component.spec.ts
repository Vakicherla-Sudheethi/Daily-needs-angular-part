import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartByIdComponent } from './cart-by-id.component';

describe('CartByIdComponent', () => {
  let component: CartByIdComponent;
  let fixture: ComponentFixture<CartByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartByIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
