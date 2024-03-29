import { Component, OnDestroy, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit, OnDestroy{
allComment: any;
private subs = new Subscription

  constructor( private fetchService: FetchService) {    
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  
  ngOnInit(): void {
    this.getAllComments();
  }


  getAllComments(){
    this.fetchService.getAllComment().subscribe((response: any) => {
      this.allComment = response;
      console.log('res: ', response)
    })
  }
}
