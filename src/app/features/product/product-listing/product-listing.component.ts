import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServices } from 'src/app/services/product.services';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  products: Product[]

  //dependency injection to product services
  //create private member variable from ProductServices
  constructor(private productServices : ProductServices) {
    
  }
  ngOnInit() {
    if(!this.products){
      this.products = this.productServices.getAll();
    }
  }

}
