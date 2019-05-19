import { Component, OnInit } from '@angular/core';
import { ProductServices } from 'src/app/services/product.services';
import { CategoryServices } from 'src/app/services/category.services';
import { PaymentServices } from 'src/app/services/payment.services';
import { Category } from 'src/app/models/category';
import { Payment } from 'src/app/models/payment';
import { Product } from 'src/app/models/product';
import { NgForm, FormGroup, FormArray, FormControl, Validators, Validator } from '@angular/forms';
import { Tag } from 'src/app/models/tag';
import { TagServices } from 'src/app/services/tag.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  categoryData : Category[];
  paymentData  :Payment[];
  product : Product ;
  categoryObj:Category ={};
  tags:Tag[];
  onSale : number; 
  myForm :FormGroup;
  selectedImage :number;
  submitted:Boolean = false;
  editProduct :Product;
  constructor(private productServices  :ProductServices , private categoryServices : CategoryServices,
    private paymentService : PaymentServices , private tagServicse : TagServices,
    private currntRoute : ActivatedRoute ,private navigateRouter : Router) {
   
      this.product = new Product();
      this.onSale = 1;
      this.selectedImage = 0;
      
   }

  ngOnInit() {

    this.categoryData = this.categoryServices.getAll();
    this.paymentData = this.paymentService.getAll();
    this.tags = this.tagServicse.getAll();

    //set values in form to when edit info of product
    const idProduct = +this.currntRoute.snapshot.params.id;
   this.editProduct = this.productServices.getById(idProduct);
    

    //form//

    this.myForm = new FormGroup({
      
      data:new FormGroup({
        name:new FormControl('',[Validators.required,Validators.maxLength(20)]),
        description: new FormControl('',[Validators.required])
      }),
      price:new FormControl('',[Validators.required]),
      discount:new FormControl(),
      category:new FormControl('',[Validators.required]),
      images:new FormArray([
         new FormControl(),
         new FormControl(),
        
       ]),
       paymentTypes:new FormArray([

       ]),
        tags :new FormArray([]),
    })
    //set values in form to when need edit product
    this.myForm.patchValue({
      price:this.editProduct.price,
      discount:this.editProduct.discount,
      category:this.editProduct.category,

    })
    
  }
  get images(){
    return this.myForm.get('images') as FormArray;
  }
  get myTags(){
    return this.myForm.get('tags') as FormArray;
  }
  get formData() {
    console.log(this.myForm.controls)
    return this.myForm.controls;
  }

  //when checked on checkBoxs (PaymrntTypes)
  onChange(i :number,event : Event)
  {
    const pro = this.paymentData[i];
    const checkedArray  =this.myForm.controls.paymentTypes as FormArray;
    if((event.srcElement as HTMLInputElement).checked)
    {
         checkedArray.controls.push(new FormControl(pro.id));
    }
    else{
      
      const index = ((checkedArray.controls)as Array<any>).findIndex(pro=>pro.id===i);
      checkedArray.controls.splice(index,1);
    }
  }

  //when Add Tag
  onAddTag(tag : HTMLInputElement){
    const name = tag.value;
    this.myTags.controls.push(new FormControl(name));
    tag.value = ' ';

  }

  //when delete Tag
  onDeleteTag(i :number)
  {
    const index = ((this.myTags.controls)as Array<any>).findIndex(o=>o.id===i)
    this.myTags.controls.splice(index,1);
  }
  // onEdit()
  // {

  //   this.productServices.update(this.editProduct);
  // }
  onAdd()
  { 
    this.submitted = true;
    if(this.myForm.valid)
    {
      this.productServices.add(this.myForm.getRawValue());
      console.log(this.myForm.value);
      this.navigateRouter.navigate(['/products']);
    }
    else{
      console.log('Error AddED')
    }

    //////////////////////////////////////////////////
    // when use template driven form 
    //this.productServices.add(this.product);
    ////////////////////////////////////////////////////
    // add when use ngModel and use Name this is one Way Binding
    // this.product.name = myForm.value.txtName;
    // this.product.price = myForm.value.txtPrice;
    // this.product.discription = myForm.value.txtDescription;
    // this.product.category= myForm.value.txtCat;
    // this.product.discount = myForm.value.txtDiscount;
    // if(myForm.value.txtDiscount)
    // {
      //   this.product.priceAfterSale = this.product.price -(this.product.price*(this.product.discount/100));
      // }
      
      
    }
    
}
