import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxjsExService } from 'src/app/services/utility/rxjs-ex.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnDestroy {
  userName: any;

  constructor(private servUti: RxjsExService) { 
   
  }
  changeName(uname:any) {
    this.servUti.userName.next(uname.value)
  }
  ngOnInit(): void {
    // console.log('Hello')
    this.servUti.userName.subscribe(res=>{
      console.log('res user====', res)
      this.userName=res;
    })
    this.servUti.exclusive.next(true)
  }

  ngOnDestroy(): void {
    this.servUti.exclusive.next(false)
  }
}
