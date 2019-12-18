import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications = [];
  constructor(
    private router : Router,
    private commonSrv : CommonService 
  ) { }

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications(){
    this.notifications = this.commonSrv.getNotifications();
  }

  logOut(){
    localStorage.removeItem('userInfo');
    this.router.navigate(['category']);
  }
}
