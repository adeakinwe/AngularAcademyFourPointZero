import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  traineeDetails = {
    name: '',
    age: '',
    email: '',
    favCourse: ''
  }
  submitTraineeForm(form : any){
    if (form.valid){
      console.log('Trainee Form: ', this.traineeDetails);
    }
    else {
      console.log('Invalid form!')
    }
  }
}
