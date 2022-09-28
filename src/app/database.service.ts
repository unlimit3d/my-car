import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  urlApi = 'http://10.10.11.186/mycar';

  constructor(private http: HttpClient) { }


  get headers() {
    const token = JSON.parse(localStorage.getItem('login')!)?.jwt;
    return new HttpHeaders({
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'Cache-Control': 'no-cache',
    });
  }

  // ดึงข้อมูลรถทั้งหมด
  getCars(){
    return this.http.get(this.urlApi+'/getCardate.php', {headers: this.headers});
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
