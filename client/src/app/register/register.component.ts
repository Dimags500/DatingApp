import { User } from './../_modal/user';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @Output() cancelRegester : any  = new EventEmitter();

  model!: User;
  constructor( private acoountService : AccountService, private toster: ToastrService) { }

  ngOnInit(): void {
  }
    register(){

      console.log(this.model)

      this.acoountService.register(this.model).subscribe(response => {
        console.log(response) ;
        this.cancel();
      } , error =>{
        console.log(error);
        this.toster.error(error.error);


      })

    }
    cancel(){
    this.cancelRegester.emit(false);
    }


}
