import { Component, OnInit } from '@angular/core';
import { Trainees } from './trainees.model';
import { ITrainees, ITraineesExt } from './itrainee';
import { TraineeService } from './trainee.service';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit{

  trainees: Trainees[] = [];
  // traineeList: ITrainees[] = [];
  traineeList: ITraineesExt[] = [];
  //id , name, age, email, favouriteCourse

  constructor( private traineeService: TraineeService){
  }

  ngOnInit(){
    this.getTrainees();
    this.getTraineeList();
  }

  getTrainees(){
    this.trainees = this.traineeService.getTrainees();
  }

  getTraineeList(){
    this.traineeList = this.traineeService.getTraineeList();
  }
}
