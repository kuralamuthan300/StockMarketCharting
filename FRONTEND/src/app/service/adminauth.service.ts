import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username, password){
    if(username=="Nitish" && password=="1234"){
      sessionStorage.setItem('authenticateUser', username)
      return true;
    }
    return false;
  }


  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }

}
