import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../../database.service';
import * as XLSX from 'xlsx';
export interface Car{
  id?:number;
  name:string;
  model?:string;
  price:number;
  vat?:number;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit, OnChanges {

  flag = 'NEW';
  // name = 'Honda';
  // model = 'CRV';
  // price = 1000000;
  p = 1;

  car:Car={
    name: '',
    model: '',
    price: 0
  };

  cars:Car[] = [
    {
      id:1,
    name: 'Toyota3',
    model: 'VIGO3',
    price: 500003,
  },
  {
    id:2,
    name: 'Toyota4',
    model: 'VIGO4',
    price: 500004,
  },{
    id:3,
    name:'MG',
    model:'ZZ',
    price:800000
  },
  {
    id:4,
    name:'Yamaha',
    price:34000
  }
];

  @ViewChild('export') export!:ElementRef;

// ส่งออก Excel
exportToExcel() {
  // const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.cars);
  const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.export.nativeElement);
  const WB: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet( WB, worksheet, 'example' );
  XLSX.writeFile( WB, 'example.xlsx' );

  // FileSaver.saveAs(data, fileName);
}

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    this.loadCars();

    // console.log(this.cars);
  }

  // โหลดข้อมูลรถ
  loadCars(){
    this.db.getCars().subscribe((res:any)=>{
      console.log(res);
      this.cars = res.data;
    });

  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  // บันทึกข้อมูลรถ
  saveCar(f:NgForm){
    // console.log(this.car);
    if(f.invalid){
      alert('โปรดตรวจสอบฟอร์ม');
      return;
    }


    let vat = 0;
    vat = this.car.price*7/100;
    this.car.vat = vat;
    console.log(vat);

    this.db.saveCar(this.car).subscribe((res:any)=>{
      console.log(res);
      this.loadCars();
    });

    // if(this.car.name == ''){
    //   alert('โปรดกรอกชื่อยี่ห้อ');
    //   return;
    // }

    // if(this.car.price <= 0){
    //   alert('โปรดกรอกราคา');
    //   return;
    // }

// if(this.flag == 'NEW'){
  // this.car.id = this.cars.length+1;
  // this.cars.push(this.car);
// }else if(this.flag == 'EDIT'){

// }

    this.car={
      name: '',
      model: '',
      price: 0
    };
  }

  onEdit(rs:Car, i:number){
    this.flag = 'EDIT';
    console.log(rs);
    this.car = rs;
    // this.car = {
    //   name: rs.namexx,
    //   model: rs.modelxxxx,
    //   price: rs.pricemm,
    // };
  }

  onSaveEdit(){

    this.db.updateCar(this.car).subscribe((res:any)=>{
      console.log(res);
      this.loadCars();
    });

    // console.log(this.car);
    this.flag = 'NEW';
    this.car={
      name: '',
      model: '',
      price: 0
    };
  }



}
