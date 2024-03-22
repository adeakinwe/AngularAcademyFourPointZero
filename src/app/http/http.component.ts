import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{
comments : any[] = [];

/**
 *
 */
constructor(private httpService: HttpService) {
  
}
  ngOnInit(): void {
    this.getAll();
  }


getAll(){
  this.httpService.getAllData().subscribe((res: any) => {
    console.log(res);
    this.comments = res
  })
}
}
