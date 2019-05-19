import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemListToolComponent } from './product-item-list-tool.component';

describe('ProductItemListToolComponent', () => {
  let component: ProductItemListToolComponent;
  let fixture: ComponentFixture<ProductItemListToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemListToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemListToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
