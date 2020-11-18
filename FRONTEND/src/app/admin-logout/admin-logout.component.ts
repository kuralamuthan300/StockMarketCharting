import { Component, OnInit } from '@angular/core';
import { AdminauthService } from '../service/adminauth.service';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

  constructor(private adminauthService: AdminauthService) { }

  ngOnInit(): void {
    this.adminauthService.logout()
  }

}
