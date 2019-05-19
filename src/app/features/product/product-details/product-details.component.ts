import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductServices } from 'src/app/services/product.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product :Product;

  constructor(private currentRoute : ActivatedRoute , private productServices : ProductServices) {

   }

  ngOnInit() {
    const id = +this.currentRoute.snapshot.params.id;
    this.product= this.productServices.getById(id);
    
  }

}
