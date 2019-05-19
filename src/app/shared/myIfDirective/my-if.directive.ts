import { Directive, HostBinding, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective implements OnInit{
  

  @Input("appMyIf") test : boolean;

  constructor(private template : TemplateRef<any> , private viewContainer : ViewContainerRef) {

   }

   ngOnInit() {
    
    if(this.test)
    {
      this.viewContainer.createEmbeddedView(this.template);
    }
  }
}
