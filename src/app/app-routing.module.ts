import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorFunPageComponent } from './calculator-fun-page/calculator-fun-page.component';
import { GeneralMathematiciansPageComponent } from './general-mathematicians-page/general-mathematicians-page.component';
import { GeneralTimelinePageComponent } from './general-timeline-page/general-timeline-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { JokesPageComponent } from './jokes-page/jokes-page.component';
import { LearnMorePageComponent } from './learn-more-page/learn-more-page.component';
import { MathWarsPageComponent } from './math-wars-page/math-wars-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, children: [
    {path: 'home', component: HomePageComponent}
  ]},
  {path:'info', component: InfoPageComponent},
  {path: 'learn-more', component: LearnMorePageComponent},
  {path: 'jokes', component: JokesPageComponent},
  {path: 'general-timeline', component: GeneralTimelinePageComponent},
  {path: 'math-wars', component: MathWarsPageComponent},
  {path: 'general-mathematicians', component: GeneralMathematiciansPageComponent},
  {path: 'calculator-fun', component: CalculatorFunPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}