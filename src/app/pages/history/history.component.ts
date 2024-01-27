import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { MatchCardComponent } from "../../components/match-card/match-card.component";

@Component({
    selector: 'app-history',
    standalone: true,
    templateUrl: './history.component.html',
    styleUrl: './history.component.css',
    imports: [MatchCardComponent]
})
export class HistoryComponent implements OnInit{
  allMatch : any;
  constructor (private apicall: ApiCallService){}

  ngOnInit(): void {
    this.apicall.getAllMatches().subscribe({
      next: data=>{
        this.allMatch = data
      },
      error:error=>{
        console.log(error)
      }
     })
    }
  }





