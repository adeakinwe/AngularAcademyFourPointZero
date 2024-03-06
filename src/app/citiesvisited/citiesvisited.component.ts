import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-citiesvisited',
  templateUrl: './citiesvisited.component.html',
  styleUrls: ['./citiesvisited.component.css']
})
export class CitiesvisitedComponent {
@Input() numOfCities: number = 0;
@Output() numOfCitiesVisitedEmit: EventEmitter<number>; //this is to be emitted as an output to the parent component
citiesCount: number = 0;

id: string | undefined;

constructor( private route: ActivatedRoute){
  this.numOfCitiesVisitedEmit = new EventEmitter<number>();
  this.route.params.subscribe((param) => { this.id = param['id']}); //retrieve the value of our route parameter
}

increaseCitiesCount(){
//this.increaseCount = this.increaseCount + 1;
//this.increaseCount ++
this.citiesCount += 1;
this.numOfCitiesVisitedEmit.emit(this.citiesCount)
}

decreaseCitiesCount(){
this.citiesCount -= 1;
this.numOfCitiesVisitedEmit.emit(this.citiesCount);
}
}
