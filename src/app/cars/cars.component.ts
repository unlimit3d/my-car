import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export interface Car{
  name:string;
  model?:string;
  price:number;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit, OnChanges {

  // name = 'Honda';
  // model = 'CRV';
  // price = 1000000;

  car:Car={
    name: '',
    model: '',
    price: 0
  };

  cars:Car[] = [
    {
    name: 'Toyota3',
    model: 'VIGO3',
    price: 500003,
  },
  {
    name: 'Toyota4',
    model: 'VIGO4',
    price: 500004,
  },{
    name:'MG',
    model:'ZZ',
    price:800000
  },
  {
    name:'Yamaha',
    price:34000
  }
];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cars);
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  // บันทึกข้อมูลรถ
  saveCar(){
    // console.log(this.car);

    if(this.car.name == ''){
      alert('โปรดกรอกชื่อยี่ห้อ');
      return;
    }

    if(this.car.price <= 0){
      alert('โปรดกรอกราคา');
      return;
    }

    this.cars.push(this.car);
    this.car={
      name: '',
      model: '',
      price: 0
    };
  }

}
