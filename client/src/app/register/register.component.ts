import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @Output() cancelRegester : any  = new EventEmitter();

  model: any ={};
  constructor( private acoountService : AccountService) { }

  ngOnInit(): void {
  }
    register(){
      this.acoountService.register(this.model).subscribe(response => {
        console.log(response) ;
        this.cancel();
      })
      
    }
    cancel(){
    this.cancelRegester.emit(false);      
    }


}
