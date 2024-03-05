import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { FooterComponent } from './footer/footer.component';
import { CitiesvisitedComponent } from './citiesvisited/citiesvisited.component';
import { TraineeComponent } from './trainee/trainee.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'cities', component: CitiesComponent},
  { path: 'trainees', component: TraineeComponent},
  { path: 'cities-visited/:id', component: CitiesvisitedComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'cities', pathMatch: 'full'} //a wild card route that redirects to a configured path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
