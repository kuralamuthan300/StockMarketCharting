import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ClientauthService } from './clientauth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuardService implements CanActivate {



  constructor(private clientauthService: ClientauthService,
    private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.clientauthService.isUserLoggedIn()){
        return true;
      }else{
  
      this.router.navigate(['clientlogin'])
      return false;}
    }
}
