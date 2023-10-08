import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from './services/api-connect.service';
import { timer } from 'rxjs/internal/observable/timer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  conditionImg: any[] | undefined;
  constructor(private apiConnect: ApiConnectService){}

  ngOnInit(): void {
    this.getCurrently()

    timer(0, 4000).subscribe(()=>{
      this.getCurrently()
    });
  }

  getCurrently(){
    this.apiConnect.getCurrentCondition().subscribe((data)=>{
      this.conditionImg = data.currently
    })
  }


}
