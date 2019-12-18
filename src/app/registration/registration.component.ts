import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userName: string;
  password: string;
  number: number;
  usersList = [];

  constructor(
    private router : Router,
    private datePipe : DatePipe,
  ) { }

  ngOnInit() {
    if(localStorage.getItem('usersList')){
      this.usersList = JSON.parse(localStorage.getItem('usersList'));
    } else {
      localStorage.setItem('usersList', JSON.stringify(this.usersList));
    }
  }

  register(){
    if (!isNullOrUndefined(this.userName) && !isNullOrUndefined(this.password) && !isNullOrUndefined(this.number)) {
      this.usersList.push({
        user : this.userName,
        date : this.datePipe.transform(new Date(),'shortDate'),
        time : this.datePipe.transform(new Date(),'shortTime')
      });
      localStorage.setItem('usersList', JSON.stringify(this.usersList));
      alert("Registered Successfully");
      this.router.navigate(['category']);
    } else {
      alert("Please fill all fields");
    }
    
  }
}
