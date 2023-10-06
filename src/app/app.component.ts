import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from './services/api-connect.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  conditionImg: any[] | undefined;
  constructor(private apiConnect: ApiConnectService){

  }
  ngOnInit(): void {
    this.apiConnect.getCurrentCondition().subscribe((data)=>{
      this.conditionImg = data.currently
    })

  }


}
