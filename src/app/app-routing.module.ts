import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, children: [
    {path: 'home', component: HomePageComponent}
  ]},
  {path:'info', component: InfoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}