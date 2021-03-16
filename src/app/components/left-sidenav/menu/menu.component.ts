import { Component, OnInit } from '@angular/core';

interface Menu {
  link: string;
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
      { link: 'home', isClicked: true },
      { link: 'messages', isClicked: false },
      { link: 'profile', isClicked: false },
      { link: 'saved post', isClicked: false },
      { link: 'settings', isClicked: false },
    ];
  }
  // ! function that's allow:  exact selection of one link at time by adding active class
  public VerifyClicks(i: number) {
    this.menu.forEach((item, index) => {
      index == i ? (item.isClicked = true) : (item.isClicked = false);
    });
  }
}
