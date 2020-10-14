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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion'
import { GeneralMathematiciansPageComponent } from './general-mathematicians-page/general-mathematicians-page.component';
import { CalculatorFunPageComponent } from './calculator-fun-page/calculator-fun-page.component';
import { FooterComponent } from './footer/footer.component';
import { JohnConwayPageComponent } from './john-conway-page/john-conway-page.component';

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
    MathWarsPageComponent,
    GeneralMathematiciansPageComponent,
    CalculatorFunPageComponent,
    FooterComponent,
    JohnConwayPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
