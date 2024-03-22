import { Component, OnInit } from '@angular/core';
import { Trainees } from '../trainee/trainees.model';
import { ITraineesExt } from '../trainee/itrainee';
import { TraineeService } from '../trainee/trainee.service';

@Component({
  selector: 'app-trainee-card',
  templateUrl: './trainee-card.component.html',
  styleUrls: ['./trainee-card.component.css']
})
export class TraineeCardComponent implements OnInit{
  trainees: Trainees[] = [];
  traineeList: ITraineesExt[] = [];
  allTrainees: ITraineesExt[] = [];

  constructor(private traineeService: TraineeService){

  }

  ngOnInit(): void {
    this.getTraineeList();
    this.getTrainees();
    this.getAllTrainees();
  }

  getTrainees(){
    this.trainees = this.traineeService.getTrainees();
  }

  getTraineeList(){
    this.traineeList = this.traineeService.getTraineeList()
  }

  getAllTrainees(){
    //this.allTrainees.push(...this.trainees, ...this.traineeList);
    this.allTrainees = [...this.trainees, ...this.traineeList];
  }
}
