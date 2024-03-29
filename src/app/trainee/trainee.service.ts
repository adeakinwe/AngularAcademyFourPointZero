import { Injectable } from '@angular/core';
import { Trainees } from './trainees.model';
import { ITraineesExt } from './itrainee';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  constructor() { }

  getTrainees() : Trainees[]{
    let trainees = [
    { id: 1, name: "Josephine", age: 24, email: 'josephine@gmail.com', favouriteCourse: 'Angular', isMarried: true, image:'assets/pic1.jpg'},
    { id: 2, name: "Olaoluwa", age: 21, email: 'josephine@gmail.com', favouriteCourse: 'C#'},
    { id: 3, name: "Benjamin", age: 22, email: 'josephine@gmail.com', favouriteCourse: 'React'},
    { id: 4, name: "Eniola", age: 26, email: 'josephine@gmail.com', favouriteCourse: 'Angular'},
    { id: 5, name: "Tukur", age: 20, email: 'josephine@gmail.com', favouriteCourse: 'SQL'},
    { id: 6, name: "Ifeoluwa", age: 23, email: 'josephine@gmail.com', favouriteCourse: 'React'}
    ]  
    return trainees;
  }

  getTraineeList(): ITraineesExt[]{
    let traineeList = [
      { id: 7, name: "Esther", age: 24, email: 'josephine@gmail.com', favouriteCourse: 'Angular', isMarried: true, image: 'assets/pic2.jpg'},
      { id: 8, name: "Moyo", age: 21, email: 'josephine@gmail.com', favouriteCourse: 'C#'},
      { id: 9, name: "Oluwaseun", age: 22, email: 'josephine@gmail.com', favouriteCourse: 'React'},
      { id: 10, name: "Kelvin", age: 26, email: 'josephine@gmail.com', favouriteCourse: 'Angular'},
      { id: 11, name: "Samuel", age: 20, email: 'josephine@gmail.com', favouriteCourse: 'SQL'},
      { id: 12, name: "Hadijat", age: 23, email: 'josephine@gmail.com', favouriteCourse: 'React'}
      ]     
      return traineeList;
  }
}
