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
import { MenuComponent } from './components/left-sidenav/menu/menu.component';
import { AccountComponent } from './components/left-sidenav/account/account.component';
import { BrandComponent } from './components/left-sidenav/brand/brand.component';
import { ToolboxComponent } from './components/right-sidenav/toolbox/toolbox.component';
import { SuggestionsComponent } from './components/right-sidenav/suggestions/suggestions.component';
import { LatestActivityComponent } from './components/right-sidenav/latest-activity/latest-activity.component';
import { FooterComponent } from './components/right-sidenav/footer/footer.component';
import { FeedsComponent } from './components/main/feeds/feeds.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HomeComponent, LeftSidenavComponent, RightSidenavComponent, NavStoriesComponent, MenuComponent, AccountComponent, BrandComponent, ToolboxComponent, SuggestionsComponent, LatestActivityComponent, FooterComponent, FeedsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
