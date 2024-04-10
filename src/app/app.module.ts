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
import { TraineeCardComponent } from './trainee-card/trainee-card.component';
import { FetchComponent } from './fetch/fetch.component';
import { FetchService } from './fetch/fetch.service';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    FooterComponent,
    CitiesvisitedComponent,
    NavComponent,
    HomeComponent,
    TraineeComponent,
    TraineeCardComponent,
    FetchComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TraineeService,FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
