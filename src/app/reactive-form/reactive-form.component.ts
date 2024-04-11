import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  traineeForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.initTraineeForm();
  }
  
  initTraineeForm(){
    this.traineeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(30)]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      favCourse: ['', Validators.required]
    })
  }

  submitTraineeForm(){
    if (this.traineeForm.valid){
      console.log('Trainee Form: ', this.traineeForm.value);
    }
  }
}
