import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from '../_modal/member';
import { environment } from 'src/environments/environment.dev';


// const httpOptions = {
//   headers : new HttpHeaders({

//     Authorization : 'Bearer ' + JSON.parse(localStorage.getItem('user') as string).token


//   })


@Injectable({
  providedIn: 'root'
})
export class MembersService {


  baseUrl =  environment.apiUrl;


constructor(private http : HttpClient) { }


getMembers() {
  return this.http.get<Member[]>(this.baseUrl + 'users'    )
}

getMember(username : string) {
  return this.http.get<Member>(this.baseUrl + 'users/'+ username   )
}


}
