import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MembersService } from './../../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_modal/member';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';



@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  member : Member | any ;

  //kolkov/ngx-gallery library for disply photos in slider 
  galleryOptions!: NgxGalleryOptions[];
  galleryImages!: NgxGalleryImage[];

  constructor( private membersService : MembersService  , private routh : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember();


    this.galleryOptions = [
      {
        width : '500px' ,
        height: '500px' ,
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide    ,
        preview : false
      }
    ]

  }

// this function  retur Array of  photo urls of member photos 
  getImages() : NgxGalleryImage[] {
    const imageUrls = [] ;

    for(const photo of this.member.photos){
      imageUrls.push({
        small : photo?.url ,
        medium: photo?.url ,
        big: photo?.url 


      })

    }
          return imageUrls ;

  }

// this funtion get user by userName from membersService & save it to this.member and load user images 
  loadMember(){
    this.membersService.getMember(this.routh.snapshot.paramMap.get("username") as string  ).subscribe(member => {
      this.member = member ;
      this.galleryImages = this.getImages();
    })
  }

}
