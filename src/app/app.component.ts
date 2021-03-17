import { Component, OnInit } from '@angular/core';
import fadeAnimation from './shared/animations/fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
  isShown: boolean = false;

  ngOnInit() {
    //* set timeout for animation intro
    setTimeout(() => {
      this.isShown = true;
    }, 500);
  }
}
