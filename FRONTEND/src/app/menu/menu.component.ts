import { Component, OnInit } from '@angular/core';
import { AdminauthService } from '../service/adminauth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public adminauthService: AdminauthService) { }

  ngOnInit(): void {
  }

}
