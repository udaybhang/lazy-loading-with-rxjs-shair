import { Component, OnInit } from '@angular/core';
import { RxjsExService } from 'src/app/services/utility/rxjs-ex.service';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.css']
})
export class Com1Component implements OnInit {
  userName: any;

  constructor(private servUti: RxjsExService) { }
  changeName(uName:any){ 
    this.servUti.userName.next(uName.value)
  }
  ngOnInit(): void {
    this.servUti.userName.subscribe(res=>{
      console.log('res list====', res)
      this.userName = res;
    })
  }
}
