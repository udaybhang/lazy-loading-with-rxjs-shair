import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-class-active',
  templateUrl: './class-active.component.html',
  styleUrls: ['./class-active.component.css']
})
export class ClassActiveComponent implements OnInit {
activeIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }
  activeIndex0(a:any) {
   this.activeIndex = a;
  }
  activeIndex1(a:any) {
    this.activeIndex = a;
   }
   activeIndex2(a:any) {
    this.activeIndex = a;
   }
}
