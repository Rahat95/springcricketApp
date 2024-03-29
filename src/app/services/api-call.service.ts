import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getAllMatches(){
    return this.http.get(`${environment.apiUrl}/match`)
  }
  getLiveMatches(){
    return this.http.get(`${environment.apiUrl}/match/live`)
  }
  getPointTable(){
    return this.http.get(`${environment.apiUrl}/match/point-table`)
  }
}
