import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {

  constructor() {

    const x = new Promise((resolve, reject) => {
      setTimeout(() => { let no = 10; no++; console.log(no) }, 2000)
    });
    x.then((res) => {

    }
    ).catch((err) => {
      console.log(err);
    })

    //   const z = interval(2000);
    //   z.subscribe(
    //     (value)=>{console.log(value)},
    //     ()=>{},
    //     ()=>{}
    //   )
    let y = new Observable((o) => {
      let no = 1;
      setTimeout(() => { o.next(no); no++; }, 2000);
    });
    y.subscribe(
      (value) => { console.log(value) }
    )
  }

  ngOnInit() {
  }

}
