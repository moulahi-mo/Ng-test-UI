import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/interfaces';

@Component({
  selector: 'app-nav-stories',
  templateUrl: './nav-stories.component.html',
  styleUrls: ['./nav-stories.component.scss'],
})
export class NavStoriesComponent implements OnInit {
  following: User[];
  currUser: User;
  constructor() {}

  ngOnInit(): void {
    //! hard code current auth user
    this.currUser = {
      uid: '12',
      firstName: 'michael',
      lastName: 'scofield',
      pseudo: '@michaelscofield',
      picture: '../../../../assets/images/users/user-74.jpg',
      isActive: true,
      followers: 155,
      following: 1230,
    };

    //! hard code some following stories of users
    this.following = [
      {
        uid: '51',
        firstName: 'supardi',
        lastName: 'tancredi',
        pseudo: '@dr.sarah',
        picture: '../../../../assets/images/users/user-51.jpg',
        isActive: true,
        followers: 155,
        following: 1230,
        isFollowed: false,
      },
      {
        uid: '78',
        firstName: 'Dean',
        lastName: 'shelby',
        pseudo: '@arth.shelby',
        picture: '../../../../assets/images/users/user-78.jpg',
        isActive: true,
        followers: 899,
        following: 3652,
        isFollowed: true,
      },
      {
        uid: '97',
        firstName: 'walter',
        lastName: 'diesel',
        pseudo: '@vin.diesel',
        picture: '../../../../assets/images/users/user-97.jpg',
        isActive: false,
        followers: 145,
        following: 12,
        isFollowed: false,
      },
      {
        uid: '32',
        firstName: 'jessy',
        lastName: 'diesel',
        pseudo: '@vin.diesel',
        picture: '../../../../assets/images/users/user-32.jpg',
        isActive: false,
        followers: 145,
        following: 12,
        isFollowed: false,
      },
      {
        uid: '85',
        firstName: 'arnold',
        lastName: 'diesel',
        pseudo: '@vin.diesel',
        picture: '../../../../assets/images/users/user-85.jpg',
        isActive: false,
        followers: 145,
        following: 12,
        isFollowed: false,
      },
      {
        uid: '62',
        firstName: 'brad',
        lastName: 'diesel',
        pseudo: '@vin.diesel',
        picture: '../../../../assets/images/users/user-62.jpg',
        isActive: false,
        followers: 145,
        following: 12,
        isFollowed: false,
      },
    ];
  }
}
