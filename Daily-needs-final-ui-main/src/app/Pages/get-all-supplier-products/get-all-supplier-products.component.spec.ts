import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSupplierProductsComponent } from './get-all-supplier-products.component';

describe('GetAllSupplierProductsComponent', () => {
  let component: GetAllSupplierProductsComponent;
  let fixture: ComponentFixture<GetAllSupplierProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllSupplierProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllSupplierProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
