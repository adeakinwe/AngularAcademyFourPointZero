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

  constructor(private traineeService: TraineeService){

  }

  ngOnInit(): void {
    this.getTraineeList();
    this.getTrainees();
  }

  getTrainees(){
    this.trainees = this.traineeService.getTrainees();
  }

  getTraineeList(){
    this.traineeList = this.traineeService.getTraineeList()
  }
}
