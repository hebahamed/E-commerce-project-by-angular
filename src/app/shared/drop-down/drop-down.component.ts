import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  isDisplay:boolean;
  constructor() {
    this.isDisplay= false;
   }

  ngOnInit() {
  }
  onDisplay()
  {
     this.isDisplay = !this.isDisplay
  }
}
