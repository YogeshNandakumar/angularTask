import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj = {
    userName:"",
    password:""
  }
  constructor(
    private commonSrv : CommonService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  login(){
    console.log("it is login obj", this.loginObj);
    let x = this.commonSrv.login(this.loginObj);
    console.log("it is after login", x);
    if(x){
      localStorage.setItem('userInfo', "admin");
      this.router.navigate(['admin/notifications']);
    } else {
      alert("please enter valid credentials");
    }
  }
}
