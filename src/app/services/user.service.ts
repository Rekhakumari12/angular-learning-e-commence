import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsersDetails {
  private userDetails: any;

  saveUserDetails(details: any) {
    this.userDetails = details;
  }

  getUserDetails() {
    return this.userDetails;
  }
}
