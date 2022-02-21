import { Component, OnInit } from '@angular/core';
import { RxjsExService } from 'src/app/services/utility/rxjs-ex.service';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false
  constructor(private rxjsSer: RxjsExService) { 
  
  }


  ngOnInit(): void {
    this.rxjsSer.exclusive.subscribe(res=>{
      this.exclusive = res;
    })
  }

}
