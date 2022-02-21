import { Component, OnInit } from '@angular/core';
import { RxjsExService } from 'src/app/services/utility/rxjs-ex.service';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.css']
})
export class Com2Component implements OnInit {
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
