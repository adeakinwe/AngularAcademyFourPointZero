import { Component } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})

export class CitiesComponent {
myCity: string = 'Lagos';

cities: string[] = ['Osogbo','Enugu','Kaduna','Benin','Akure'];
}
