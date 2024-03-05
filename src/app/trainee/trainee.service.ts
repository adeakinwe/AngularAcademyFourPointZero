import { Injectable } from '@angular/core';
import { ITraineesExt, Trainees } from './trainees.model';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  constructor() { }

  getTrainees(): Trainees[]{
    let trainees  = [
      { id: 1, name: 'Ayoola Mercy', age: 23, favouriteCourse: 'Angular' },
      { id: 2, name: 'Benson Mary', age: 19, favouriteCourse: 'C#' },
      { id: 3, name: 'John Doe', age: 21, favouriteCourse: 'React' },
      { id: 4, name: 'Billy Margaret', age: 20, favouriteCourse: 'Angular' },
      { id: 5, name: 'Mark Cooper', age: 24, favouriteCourse: 'SQA' },
      { id: 6, name: 'Frank Kewell', age: 22, favouriteCourse: 'SQL' }
    ]
  return trainees;
  }
  
  iTrainees: ITraineesExt[] = [
    { id: 1, name: 'Ayoola Mercy', age: 23, favouriteCourse: 'Angular' },
    { id: 2, name: 'Benson Mary', age: 19, favouriteCourse: 'C#' },
    { id: 3, name: 'John Doe', age: 21, favouriteCourse: 'React' },
    { id: 4, name: 'Billy Margaret', age: 20, favouriteCourse: 'Angular' },
    { id: 5, name: 'Mark Cooper', age: 24, favouriteCourse: 'SQA' },
    { id: 6, name: 'Frank Kewell', age: 22, favouriteCourse: 'SQL' }
  ]

}