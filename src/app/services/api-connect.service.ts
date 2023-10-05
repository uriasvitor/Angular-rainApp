import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Icondition } from '../models/Icondition';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Icondition>{
    return this.http.get<Icondition>(api)
  }
}
