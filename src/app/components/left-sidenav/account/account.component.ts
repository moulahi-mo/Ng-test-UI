import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/interfaces';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user: User;
  isShown: boolean;
  constructor() {}

  ngOnInit(): void {
    //! hard coded user exemple
    this.user = {
      uid: '12',
      firstName: 'michael',
      lastName: 'scofield',
      pseudo: '@michaelscofield',
      picture: '../../../../assets/images/users/user-74.jpg',
      isActive: false,
      followers: 155,
      following: 1230,
    };
    this.isShown = true;
  }
  public toggle() {
    this.isShown = !this.isShown;
  }
}
