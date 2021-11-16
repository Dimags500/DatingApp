import { MemberEditComponent } from './../members/member-edit/member-edit.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedGuard implements CanDeactivate<unknown> {
  canDeactivate( component: MemberEditComponent) :  boolean {
    if(component.editForm.dirty){
      return confirm('Are you sure ? you whant to exit ');
    }
    return true;
  }

}
