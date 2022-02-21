import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsExService {
exclusive = new Subject<any>()
userName = new Subject<any>()
  constructor(private http:HttpClient) { }

  checkHttp() {
    return this.http.get('http://localhost:3000/api/v1/user')
  }
}
