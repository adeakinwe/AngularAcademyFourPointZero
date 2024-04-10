import { Component } from '@angular/core';
import { FetchService } from '../fetch/fetch.service';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {
  constructor(private fetchService: FetchService) {
    
  }
 userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: null,
    gender: ''
  };

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.userDetails);
    }
  }

  submitTraineeForm(form: any){
    form = JSON.stringify(form);
    this.fetchService.submitTraineeForm(form).subscribe((res) => {
      console.log(res);
    })
  }
}
