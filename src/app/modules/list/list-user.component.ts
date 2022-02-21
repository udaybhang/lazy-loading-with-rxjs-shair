import { Component, OnInit } from '@angular/core';
import { RxjsExService } from 'src/app/services/utility/rxjs-ex.service';
declare var $:any;
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  userName: any;

  constructor(private servUti:RxjsExService) {
   
   }
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
