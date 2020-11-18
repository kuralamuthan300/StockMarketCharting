import { Component, OnInit } from '@angular/core';
import { ClientauthService } from '../service/clientauth.service';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.css']
})
export class ClientMenuComponent implements OnInit {

  constructor(public clientauthService: ClientauthService) { }

  ngOnInit(): void {
  }

}
