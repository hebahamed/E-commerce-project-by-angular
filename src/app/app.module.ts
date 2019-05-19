import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ProductListingComponent } from './features/product/product-listing/product-listing.component';
import { ProductItemComponent } from './features/product/product-item/product-item.component';
import { ProductGategoryComponent } from './features/product/product-gategory/product-gategory.component';
import { ProductItemListToolComponent } from './features/product/product-item-list-tool/product-item-list-tool.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeProductsComponent } from './features/product/home-products/home-products.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProductServices } from './services/product.services';
import { CategoryServices } from './services/category.services';
import { PaymentServices } from './services/payment.services';
import { TagServices } from './services/tag.services';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListingComponent,
    ProductItemComponent,
    ProductGategoryComponent,
    ProductItemListToolComponent,
    AddProductComponent,
    DropDownComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    HomeProductsComponent,
    FooterComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
   
   
    RouterModule.forRoot([

      {path:'home' ,component:HomeProductsComponent},
      {path:'products' , component:ProductListingComponent},
      {path:'products/add' , component:AddProductComponent},
      {path:'product/edit/:id',component:AddProductComponent},
      {path:'product/details/:id',component:ProductDetailsComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent}
    ])
  ],
  providers: [
    ProductServices,
    CategoryServices,
    PaymentServices,
    TagServices
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
