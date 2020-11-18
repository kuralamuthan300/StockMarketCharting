import { Component, OnInit } from '@angular/core';

export class Company{
  constructor(
    public companyId: number,
    public companyName: string,
    public ceo: string,
    public boardOfDirectors: string
  ){

  }
}

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {


  companies = [
    new Company(1,'Honda','Nitish','Nit&Anu'),
    new Company(2,'Dell','Nitish','Nit&Anu'),
    new Company(3,'HP','Nitish','Nit&Diku')
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
