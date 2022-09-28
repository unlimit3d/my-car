import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  urlApi = 'http://localhost/mycar';

  constructor(private http: HttpClient) { }

  // ดึงข้อมูลรถทั้งหมด
  getCars(){
    return this.http.get(this.urlApi+'/getCardate.php');
  }

  // เพิ่มข้อมูลรถ
  // car:Car={
  //   name: '',
  //   model: '',
  //   price: 0
  // };
  saveCar(car:any){
    return this.http.post(this.urlApi+'/pushCardate.php',car);
  }

  // update ข้อมูลรถ
  updateCar(car:any){
    return this.http.post(this.urlApi+'/mycar/updateCardate.php',car);
  }
  // ลบข้อมูลรถ

  // ข้อมูลรถ id

}
