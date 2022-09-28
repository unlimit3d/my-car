import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  errorMsg: any = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private db: DatabaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.frmLogin.value);
    this.errorMsg  = '';
    this.http.post(this.db.urlApi+'/check_login.php', this.frmLogin.value).subscribe((res:any)=>{
      console.log(res);
      if(res.name){
        localStorage.setItem('login', JSON.stringify(res));

        this.router.navigateByUrl('/admin/cars');

      }else{
        this.errorMsg = res.error;
      }
    });
    // {
    //   username: this.frmLogin.value.username,
    //   password: this.frmLogin.value.password
    // })
  }

}
