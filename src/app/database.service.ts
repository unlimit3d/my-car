import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

// code
getCars(){
  this.http.get('http://localhost/mycar/getCardate.php').subscribe((res)=>{
    console.log(res);
  })
}

}
