import { Directive, HostBinding, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit{
  

  //do directive use when need background color red and if click on it backgroundcolor be yellow
  //use hostbinding and hostListener
  @HostBinding('style.backgroundColor')
   backColor : string;
   @Input() startColor :string;
   @Input() endColor :string;
  @HostListener('click')
  onClicked()
  {
    this.backColor='#0088CC';
    
    //  this.backColor= this.endColor;
     alert('Hi');
  }
  @HostBinding('innerHTML') data  :string;

  constructor() {
   
   
  }
  ngOnInit(){
    this.backColor='yellow';
    // this.backColor = this.startColor;
    this.data = "<h1>Welcome heba To Website (Directive)</h1>";
  }

}
