import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { FooterComponent } from './footer/footer.component';
import { CitiesvisitedComponent } from './citiesvisited/citiesvisited.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    FooterComponent,
    CitiesvisitedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
