import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

constructor(private route: ActivatedRoute, private router: Router){
  this.numOfCitiesVisitedEmit = new EventEmitter<number>();
}

ngOnInit(){
  this.route.params.subscribe(params => { this.id = params['id']; });
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

goBackToHome(){
  this.router.navigate(['/home']);
}
}
