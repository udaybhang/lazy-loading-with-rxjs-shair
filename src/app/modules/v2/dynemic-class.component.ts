import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynemic-class',
  templateUrl: './dynemic-class.component.html',
  styleUrls: ['./dynemic-class.component.css']
})
export class DynemicClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  a(by:any) {
    let elements = document.querySelectorAll(".ty");
    elements.forEach(function(item,i) {
      if(i != by) {
        item.classList.remove("selected");
      } else {
        item.classList.add("selected");
      }
      
    });
  }
}
