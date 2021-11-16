import { Member } from './../../_modal/member';
import { MembersService } from './../../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {


  members: any;

  constructor(private memberService : MembersService  ) {

  }

  ngOnInit() {

    this.loadMembers();
  }


  loadMembers(){
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
    })
  }

}
