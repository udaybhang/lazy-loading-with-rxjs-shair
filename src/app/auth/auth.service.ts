import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated:any;
  private token: any;
  private authStatusListener = new Subject<any>();

  constructor(private router: Router) {}


  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  login() {
        this.token = 'udaybhan123';
        this.isAuthenticated = this.token;
          this.authStatusListener.next(this.token);
          this.saveAuthData(this.token);
          this.router.navigate(["/add-user"]);
  }


  logout() {
    this.token = null;
    this.isAuthenticated = null;
    this.authStatusListener.next(null);
    this.clearAuthData();
    this.router.navigate(["/login"]);
  }


  private saveAuthData(token: string) {
    localStorage.setItem("token", token);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
  }
}
