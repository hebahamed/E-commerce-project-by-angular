import { Component, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { ProductServices } from 'src/app/services/product.services';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input('product') product:Product //b3ml input lw fe data gaya mn component tany
  // @HostListener('click') //hostlistener de bta5od esm el event elly ha3mlo
  //  clickedMe(){
  //   alert(`this is item ${this.product.name}`)
  // }

 
  constructor(private productServices : ProductServices) { 
  }

  ngOnInit() {
  }
  getPriceAfterSale(){
   return this.product.price-(this.product.price*(this.product.discount/100));
  }
  onDelete(id){

     this.productServices.delete(id);

  }

}
