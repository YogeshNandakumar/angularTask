import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdGuard implements CanActivate  {

  constructor(
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("it is in route gauard", localStorage.getItem('userInfo'));
    if(localStorage.getItem('userInfo')){
      console.log("it is in route gauard");
      return true;
    } else {
      console.log("it is in route gauard false");
      this.router.navigate(['category']);
      return false;
    }
  }
}
