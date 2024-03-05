import { Component, OnInit } from '@angular/core';
import { ITrainees, ITraineesExt, Trainees } from './trainees.model';
import { TraineeService } from './trainee.service';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit{

  constructor(private traineeService: TraineeService){
  }

  ngOnInit(){
    this.getTrainees();
    console.log(this.traineesList)
  }

  traineesList: Trainees[] = [];

  iTrainees: ITraineesExt[] = [
    { id: 1, name: 'Ayoola Mercy', age: 23, favouriteCourse: 'Angular' },
    { id: 2, name: 'Benson Mary', age: 19, favouriteCourse: 'C#' },
    { id: 3, name: 'John Doe', age: 21, favouriteCourse: 'React' },
    { id: 4, name: 'Billy Margaret', age: 20, favouriteCourse: 'Angular' },
    { id: 5, name: 'Mark Cooper', age: 24, favouriteCourse: 'SQA' }
  ]

  trainees: Trainees[] = [
    { id: 1, name: 'Ayoola Mercy', age: 23, favouriteCourse: 'Angular' },
    { id: 2, name: 'Benson Mary', age: 19, favouriteCourse: 'C#' },
    { id: 3, name: 'John Doe', age: 21, favouriteCourse: 'React' },
    { id: 4, name: 'Billy Margaret', age: 20, favouriteCourse: 'Angular' },
    { id: 5, name: 'Mark Cooper', age: 24, favouriteCourse: 'SQA' }
  ]

  getTrainees(){
    this.traineesList =  this.traineeService.getTrainees();
  }

}
