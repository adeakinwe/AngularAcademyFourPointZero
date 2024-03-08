import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { FooterComponent } from './footer/footer.component';
import { CitiesvisitedComponent } from './citiesvisited/citiesvisited.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { TraineeComponent } from './trainee/trainee.component';
import { TraineeService } from './trainee/trainee.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    FooterComponent,
    CitiesvisitedComponent,
    NavComponent,
    HomeComponent,
    TraineeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TraineeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
