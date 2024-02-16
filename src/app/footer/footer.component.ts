import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
@Input() numOfCities: number = 0;
//@Output() myOutput: EventEmitter<any> = new EventEmitter<any>();

constructor(){

}

}
