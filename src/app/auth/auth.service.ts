import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: any;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }


  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

//   createUser(email: string, password: string) {
//     const authData: AuthData = { email: email, password: password };
//     this.http
//       .post("http://localhost:3000/api/user/signup", authData)
//       .subscribe(() => {
//         this.router.navigate(["/"]);
//       }, error => {
//         this.authStatusListener.next(false);
//       });
//   }

  login() {
        this.token = 'udaybhan123';
        this.isAuthenticated = true;
          this.authStatusListener.next(true);
          this.saveAuthData(this.token);
          this.router.navigate(["/add-user"]);
  }


  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.clearAuthData();
    this.router.navigate(["/login"]);
  }


  private saveAuthData(token: string) {
    localStorage.setItem("token", token);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token
    };
  }
}
