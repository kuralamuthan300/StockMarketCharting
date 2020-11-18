import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientauthService } from '../service/clientauth.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  username = ''
  password=''
  errorMessage = 'Invalid Credentials!'
  isLoggedIn = true

  constructor(private router: Router,
    public clientauthService: ClientauthService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.clientauthService.authenticate(this.username, this.password)){
      this.isLoggedIn = true
      this.router.navigate(['clientlanding', this.username])
    
    } else{
      this.isLoggedIn = false
    }
  }

}
