import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLoginsComponent } from './get-all-logins.component';

describe('GetAllLoginsComponent', () => {
  let component: GetAllLoginsComponent;
  let fixture: ComponentFixture<GetAllLoginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllLoginsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
