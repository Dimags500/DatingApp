import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member } from '../_modal/member';
import { environment } from 'src/environments/environment.dev';
import { map } from 'rxjs/operators';


// const httpOptions = {
//   headers : new HttpHeaders({

//     Authorization : 'Bearer ' + JSON.parse(localStorage.getItem('user') as string).token


//   })


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl =  environment.apiUrl;
  members: Member[] = []; // app use service as state holder for members & make qeues only if members is > 0 || member index is undefind


constructor(private http : HttpClient) { }


getMembers() {
  if(this.members.length > 0) return of(this.members) ;
  return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
    map(members=> {
      this.members = members ;
      return members;
    })
  )
}

getMember(username : string) {
  const member = this.members.find(x => x.userName === username) ;
  if(member !== undefined) return of(member) ;
  return this.http.get<Member>(this.baseUrl + 'users/'+ username )

}

updateMember(member : Member){
  return this.http.put(this.baseUrl + 'users' , member ).pipe(
    map(()=> {
      const index = this.members.indexOf(member) ;
      this.members[index] = member ;
    })
  )

}


}
