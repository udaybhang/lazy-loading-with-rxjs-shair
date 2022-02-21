import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsExService {
exclusive = new Subject<any>()
userName = new Subject<any>()
  constructor() { }
}
