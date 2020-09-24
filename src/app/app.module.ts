import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { LearnMorePageComponent } from './learn-more-page/learn-more-page.component';
import { JokesPageComponent } from './jokes-page/jokes-page.component';
import { GeneralTimelinePageComponent } from './general-timeline-page/general-timeline-page.component';
import { MathWarsPageComponent } from './math-wars-page/math-wars-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SidebarComponent,
    InfoPageComponent,
    LearnMorePageComponent,
    JokesPageComponent,
    GeneralTimelinePageComponent,
    MathWarsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
