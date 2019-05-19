import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './testDirective/test.directive';
import { MyIfDirective } from './myIfDirective/my-if.directive';
import { MyPipePipe } from './myPipe/my-pipe.pipe';

@NgModule({
  declarations: [
    TestDirective,
    MyIfDirective,
    MyPipePipe,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TestDirective,
    MyIfDirective,
    MyPipePipe
  ]
})
export class SharedModule { }
