import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

// code
getCars(){
  return this.http.get('http://localhost/mycar/getCardate.php');
}

}
