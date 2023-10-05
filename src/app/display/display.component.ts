import { Icondition } from './../models/Icondition';
import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../services/api-connect.service';
import { Subscription, interval, map, timer } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
  condition!: Icondition;
  noConnected = 'false';
  timerSubscription: Subscription | null | undefined;

  constructor(private apiConnectService: ApiConnectService){}

  ngOnInit():void{

    timer(0, 120000).subscribe(()=>{
      this.getDataApi()
    });
  }

  getDataApi(){
    this.apiConnectService.getData().subscribe({
      next:(data)=>{
        this.condition ={
          city:data.city,
          currently:data.currently,
          date:data.date

        },
        console.log(this.condition)
      },
      error:(error)=>{
        console.log(error)
      }
    }
    )
  }
}
