import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../service/adminauth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username=''
  password=''
  isLoggedIn = true
  errorMessage = 'Invalid Credentials!!'

  constructor(private router: Router,
    public adminauthService: AdminauthService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.adminauthService.authenticate(this.username,this.password)){
      this.isLoggedIn=true
      this.router.navigate(['adminlanding', this.username])
    }
    else {
    this.isLoggedIn=false
    }
  }

}
