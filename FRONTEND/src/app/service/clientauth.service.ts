import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientauthService {

  constructor() { }
  
  authenticate(username, password){
    if(username=="nitsGupta" && password=="nit"){
      sessionStorage.setItem('authenticateClient', username)
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateClient')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticateClient')
  }


}
