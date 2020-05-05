import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './login/login.component';
import { RockpaperscissorsComponent } from './rockpaperscissors/rockpaperscissors.component';
import { DonateComponent } from './donate/donate.component';
import { TrivalgameComponent } from './trivalgame/trivalgame.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomepageComponent },
  { path: 'rockpaperscissor', component: RockpaperscissorsComponent},
  { path: 'trivalgame', component: TrivalgameComponent},
  { path: 'login', component: LoginComponent },
  { path: 'donate', component: DonateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
