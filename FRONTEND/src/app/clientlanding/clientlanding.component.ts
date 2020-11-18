import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientlanding',
  templateUrl: './clientlanding.component.html',
  styleUrls: ['./clientlanding.component.css']
})
export class ClientlandingComponent implements OnInit {

  message = 'Welcome '
  username = ''

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name']
  }

}
