import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageService } from './services/local-storage.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/main/home/home.component';
import { LeftSidenavComponent } from './components/left-sidenav/left-sidenav/left-sidenav.component';
import { RightSidenavComponent } from './components/right-sidenav/right-sidenav/right-sidenav.component';
import { NavStoriesComponent } from './components/main/nav-stories/nav-stories.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HomeComponent, LeftSidenavComponent, RightSidenavComponent, NavStoriesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
