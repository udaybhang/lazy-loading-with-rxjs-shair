import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
  } from "@angular/router";
  import { Injectable } from "@angular/core";
  import { Observable } from "rxjs";
  
  import { AuthService } from "./auth.service";
  
  @Injectable({providedIn: 'root'})
  export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = localStorage.getItem("token");
      debugger
      if (!isAuth) {
        this.router.navigate(['/login']);
      }
      return true;
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            const auth = localStorage.getItem('token')
        if(auth){
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      }
  }
  