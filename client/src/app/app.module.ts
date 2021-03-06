import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './messages/messages.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { NgxSpinnerModule } from "ngx-spinner";







@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MessagesComponent,
    TestErrorsComponent,
    MemberListComponent,
    MemberDetailComponent ,
    ListsComponent ,
    TestErrorsComponent ,
    MemberCardComponent,
    MemberEditComponent ,


  ],
  imports: [
    BrowserModule,
    CommonModule ,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    NgbModule ,
    BrowserAnimationsModule,
    SharedModule ,
    NgxSpinnerModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: ErrorInterceptor , multi: true  } ,
    {provide: HTTP_INTERCEPTORS , useClass: JwtInterceptor , multi: true  } ,
    {provide: HTTP_INTERCEPTORS , useClass: LoadingInterceptor , multi: true  }
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
