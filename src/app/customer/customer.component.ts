import { Component, OnInit } from '@angular/core';

export interface Customer{
  id?:number;
  name: string;
  tel:string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
