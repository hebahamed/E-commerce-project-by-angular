import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGategoryComponent } from './product-gategory.component';

describe('ProductGategoryComponent', () => {
  let component: ProductGategoryComponent;
  let fixture: ComponentFixture<ProductGategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductGategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
