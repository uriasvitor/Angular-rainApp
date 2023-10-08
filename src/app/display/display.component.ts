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
  item: Icondition = { city: '', currently: '', moon_phase: '', forecast: [] }
  noConnected = 'false';
  timerSubscription: Subscription | null | undefined;
  currentDay = '';
  date = new Date();
  day = (this.date.getDate() + 1);

  constructor(private apiConnectService: ApiConnectService){}

  ngOnInit():void{
    this.getDataApi()

    timer(0, 120000).subscribe(()=>{
      this.getDataApi()
    });
  }

  getDataApi(){
    this.apiConnectService.getData().subscribe({
      next:(data:Icondition)=>{
        this.item = {
          city:data.city,
          currently:data.currently,
          moon_phase:data.moon_phase,
          forecast: data.forecast.map((forecastItem)=>{
            return {
              weekday:forecastItem.weekday,
              date:forecastItem.date,
              condition:forecastItem.condition,
              max:forecastItem.max,
              min:forecastItem.min,
            }
          })
        };
        console.log(this.item.forecast)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  getSVGUrl(conditionImgSvg: string): string {
    return `../../assets/imgs/conditions/${conditionImgSvg}.svg`;
  }

  getCurrentDay(numberDay:any){
    console.log(numberDay == this.day, numberDay, this.day)
    if(numberDay == this.day){
      numberDay = 'currentDay'
    }

    return numberDay;
  }
}
