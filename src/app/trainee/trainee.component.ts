import { Component, OnInit } from '@angular/core';
import { Trainees } from './trainees.model';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit{

  trainees: Trainees[] = [];

  //id , name, age, email, favouriteCourse

  constructor(){
  }

  ngOnInit(){
    this.getTrainees();
  }

  getTrainees() : Trainees[]{
    this.trainees = [
    { id: 1, name: "Josephine", age: 24, email: 'josephine@gmail.com', favouriteCourse: 'Angular', isMarried: true},
    { id: 2, name: "Olaoluwa", age: 21, email: 'josephine@gmail.com', favouriteCourse: 'C#'},
    { id: 3, name: "Benjamin", age: 22, email: 'josephine@gmail.com', favouriteCourse: 'React'},
    { id: 4, name: "Eniola", age: 26, email: 'josephine@gmail.com', favouriteCourse: 'Angular'},
    { id: 5, name: "Tukur", age: 20, email: 'josephine@gmail.com', favouriteCourse: 'SQL'},
    { id: 6, name: "Ifeoluwa", age: 23, email: 'josephine@gmail.com', favouriteCourse: 'React'}
    ]  
    return this.trainees;
  }
}
