import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_modal/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;

  constructor( private accountService : AccountService ){}

  ngOnInit() {
    this.setCurrentUser();
}

setCurrentUser(){

  const currUser : any  = localStorage.getItem('user');
  const user: User = JSON.parse(currUser) ;
  this.accountService.setCurrentUser(user);
}



}
