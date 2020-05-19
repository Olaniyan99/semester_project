import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './login/login.component';
import { RockpaperscissorsComponent } from './rockpaperscissors/rockpaperscissors.component';
import { DonateComponent } from './donate/donate.component';
import { TrivalgameComponent } from './trivalgame/trivalgame.component';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomepageComponent },
  { path: 'rockpaperscissor', component: RockpaperscissorsComponent},
  { path: 'trivalgame', component: TrivalgameComponent},
  { path: 'login', component: LoginComponent },
  { path: 'parent/dashboard', component: ParentDashboardComponent},
  { path: 'admin/dashboard', component: AdminDashboardComponent},
  { path: 'donate', component: DonateComponent},
  { path: 'homepage', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
