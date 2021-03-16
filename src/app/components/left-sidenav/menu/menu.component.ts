import { Component, OnInit } from '@angular/core';

interface Menu {
  link: string;
  icon: string;
  isClicked: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menu: Menu[];

  constructor() {}

  ngOnInit(): void {
    this.menu = [
      { link: 'home', icon: 'fa-home', isClicked: true },
      { link: 'messages', icon: 'fa-comment', isClicked: false },
      { link: 'profile', icon: 'fa-user', isClicked: false },
      { link: 'saved post', icon: 'fa-bookmark', isClicked: false },
      { link: 'settings', icon: 'fa-cog', isClicked: false },
    ];
  }
  // ! function that's allow:  exact selection of one link at time by adding active class
  public VerifyClicks(i: number) {
    this.menu.forEach((item, index) => {
      index == i ? (item.isClicked = true) : (item.isClicked = false);
    });
  }
}
