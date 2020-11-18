import { Component, OnInit } from '@angular/core';
import { ClientauthService } from '../service/clientauth.service';

@Component({
  selector: 'app-client-logout',
  templateUrl: './client-logout.component.html',
  styleUrls: ['./client-logout.component.css']
})
export class ClientLogoutComponent implements OnInit {

  constructor(private clientauthService: ClientauthService) { }

  ngOnInit(): void {
    this.clientauthService.logout()
  }

}
