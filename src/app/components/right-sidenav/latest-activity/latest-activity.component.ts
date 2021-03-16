import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/interfaces';

@Component({
  selector: 'app-latest-activity',
  templateUrl: './latest-activity.component.html',
  styleUrls: ['./latest-activity.component.scss'],
})
export class LatestActivityComponent implements OnInit {
  post: Post;
  constructor() {}

  ngOnInit(): void {
    this.post = {
      idP: 'p52255',
      title: 'minimalist stairs',
      bookmark: 8,
      likes: 27,
      comments: 12,
      image: '../../../../assets/images/stairs.jpg',
    };
  }
}
