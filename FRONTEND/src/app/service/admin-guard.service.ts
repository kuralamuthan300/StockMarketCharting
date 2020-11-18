import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AdminauthService } from './adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {



  constructor(private adminauthService: AdminauthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.adminauthService.isUserLoggedIn()){
      return true;
    }else{

    this.router.navigate(['adminlogin'])
    return false;}
  }


}
