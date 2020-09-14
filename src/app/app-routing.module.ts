import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { LearnMorePageComponent } from './learn-more-page/learn-more-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, children: [
    {path: 'home', component: HomePageComponent}
  ]},
  {path:'info', component: InfoPageComponent},
  {path: 'learn-more', component: LearnMorePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}