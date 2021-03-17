import { Component, OnInit } from '@angular/core';
import { Feed, LikesFeed } from 'src/app/models/interfaces';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  feeds: Feed[];
  listOfLikes: LikesFeed[] = [];
  constructor(private local: LocalStorageService) {}

  ngOnInit(): void {
    //! exmples of hard coded feeds
    this.feeds = [
      {
        id: '1',
        creator: {
          firstName: 'dean',
          lastName: 'winchester',
          picture: '../../../../assets/images/users/user-75.jpg',
        },
        image: '../../../../assets/images/feeds/pink-feed.png',
        likes: 0,
        comments: 64,
        isLiked: false,
      },
      {
        id: '2',
        creator: {
          firstName: 'walter',
          lastName: 'joshua',
          picture: '../../../../assets/images/users/user-58.jpg',
        },
        image: '../../../../assets/images/feeds/blue-feed.png',
        likes: 0,
        comments: 4,
        isLiked: false,
      },
      {
        id: '3',
        creator: {
          firstName: 'brad',
          lastName: 'pullman',
          picture: '../../../../assets/images/users/user-62.jpg',
        },
        image: '../../../../assets/images/feeds/orange-feed.png',
        likes: 0,
        comments: 256,
        isLiked: false,
      },
      {
        id: '4',
        creator: {
          firstName: 'jhon',
          lastName: 'white',
          picture: '../../../../assets/images/users/user-97.jpg',
        },
        image: '../../../../assets/images/feeds/beige-feed.png',
        likes: 0,
        comments: 15,
        isLiked: false,
      },
    ];
    //! init likes state from local storage
    this.initLikes();
  }

  private initLikes() {
    this.listOfLikes = this.local.getFromLocalStorage('likes');
    // * compare the storage's states with feeds's states and update theme
    for (let feed of this.feeds) {
      this.listOfLikes.forEach((like: LikesFeed) => {
        if (like.id == feed.id) {
          feed.likes = like.likes;
          feed.isLiked = like.isLiked;
        }
      });
    }
  }

  public onIncrement(feed: Feed) {
    //! filter and increment the state
    this.feeds.forEach((item: Feed) => {
      if (item.id === feed.id) {
        feed.likes++;
        feed.isLiked = true;
        //! create the object likes per feed to store
        const likesPerFeed = {
          id: feed.id,
          likes: feed.likes,
          isLiked: true,
        };
        //! verify if feed is on the local storage or a new feed's item
        this.listOfLikes.forEach((like: LikesFeed, index) => {
          if (like.id === item.id) {
            this.listOfLikes.splice(index, 1);
          }
        });
        //! update the list or add new feed's likes
        this.listOfLikes.unshift(likesPerFeed);
      }
    });
    // ! set the list on local storage
    this.local.setToLocalStorage('likes', this.listOfLikes);
  }
}
