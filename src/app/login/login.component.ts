import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  frmLogin:FormGroup = this.fb.group({
    username:['', Validators.required],
    password:['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private db: DatabaseService) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.frmLogin.value);
    this.http.post(this.db.urlApi+'/chk_login.php', this.frmLogin.value).subscribe((res:any)=>{
      console.log(res);
    });
    // {
    //   username: this.frmLogin.value.username,
    //   password: this.frmLogin.value.password
    // })
  }

}
