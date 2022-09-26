import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  name = 'Honda';
  model = 'CRV';
  price = 1000000;

  car:any={
    name: 'Toyota',
    model: 'VIGO',
    price: 500000,
  };

  cars = [
    {
    name: 'Toyota3',
    model: 'VIGO3',
    price: 500003,
  },
  {
    name: 'Toyota4',
    model: 'VIGO4',
    price: 500004,
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
