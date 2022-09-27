import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  frmCustomer:FormGroup = new FormGroup({
    name: new FormControl('Test', Validators.required),

    tel: new FormControl('1234', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])

  });

  constructor() { }

  ngOnInit(): void {
  }

  saveCustomer(){
    console.log(this.frmCustomer.value);
  }

}
