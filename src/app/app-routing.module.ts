import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { FooterComponent } from './footer/footer.component';
import { CitiesvisitedComponent } from './citiesvisited/citiesvisited.component';
import { HomeComponent } from './home/home.component';
import { TraineeComponent } from './trainee/trainee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cities', component: CitiesComponent},
  { path: 'trainee', component: TraineeComponent},
  // { path: 'footer', component: FooterComponent},
  { path: 'cities/:id', component: CitiesvisitedComponent}, //route parameter
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'cities', pathMatch: 'full'} //a wild card route that redirects to a configured path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
