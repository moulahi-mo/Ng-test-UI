import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/models/interfaces';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  feeds: Feed[];
  constructor() {}

  ngOnInit(): void {
    //! exmples of hard coded feeds
    this.feeds = [
      {
        idf: 'f55185552',
        creator: {
          firstName: 'dean',
          lastName: 'winchester',
          picture: '../../../../assets/images/users/user-75.jpg',
        },
        image: '../../../../assets/images/feeds/pink-feed.png',
        likes: 78,
        comments: 64,
      },
      {
        idf: 'f55185898484',
        creator: {
          firstName: 'walter',
          lastName: 'joshua',
          picture: '../../../../assets/images/users/user-58.jpg',
        },
        image: '../../../../assets/images/feeds/blue-feed.png',
        likes: 14,
        comments: 4,
      },
      {
        idf: 'f5154589',
        creator: {
          firstName: 'brad',
          lastName: 'pullman',
          picture: '../../../../assets/images/users/user-62.jpg',
        },
        image: '../../../../assets/images/feeds/orange-feed.png',
        likes: 1078,
        comments: 256,
      },
      {
        idf: 'f584565456',
        creator: {
          firstName: 'jhon',
          lastName: 'white',
          picture: '../../../../assets/images/users/user-97.jpg',
        },
        image: '../../../../assets/images/feeds/beige-feed.png',
        likes: 653,
        comments: 15,
      },
    ];
  }
}
