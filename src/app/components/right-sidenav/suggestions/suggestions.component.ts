import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/interfaces';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss'],
})
export class SuggestionsComponent implements OnInit {
  users: User[];
  constructor() {}

  ngOnInit(): void {
    //! hard coded users exemples
    this.users = [
      {
        uid: '75',
        firstName: 'sarah',
        lastName: 'tancredi',
        pseudo: '@dr.sarah',
        picture: '../../../../assets/images/users/user-75.jpg',
        isActive: false,
        followers: 155,
        following: 1230,
        isFollowed: false,
      },
      {
        uid: '39',
        firstName: 'arthur',
        lastName: 'shelby',
        pseudo: '@arth.shelby',
        picture: '../../../../assets/images/users/user-39.jpg',
        isActive: false,
        followers: 899,
        following: 3652,
        isFollowed: true,
      },
      {
        uid: '58',
        firstName: 'vin',
        lastName: 'diesel',
        pseudo: '@vin.diesel',
        picture: '../../../../assets/images/users/user-58.jpg',
        isActive: false,
        followers: 145,
        following: 12,
        isFollowed: false,
      },
    ];
  }
}
