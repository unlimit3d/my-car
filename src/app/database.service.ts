import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  urlApi = 'http://localhost';

  constructor(private http: HttpClient) { }

  // ดึงข้อมูลรถทั้งหมด
  getCars(){
    return this.http.get(this.urlApi+'/mycar/getCardate.php');
  }

  // เพิ่มข้อมูลรถ
  // car:Car={
  //   name: '',
  //   model: '',
  //   price: 0
  // };
  saveCar(car:any){
    return this.http.post(this.urlApi+'/mycar/pushCardate.php',car);
  }

  // update ข้อมูลรถ

  // ลบข้อมูลรถ

  // ข้อมูลรถ id

}
