import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { JsonPipe } from '@angular/common';
import { MatchCardComponent } from "../../components/match-card/match-card.component";

@Component({
    selector: 'app-live',
    standalone: true,
    templateUrl: './live.component.html',
    styleUrl: './live.component.css',
    imports: [JsonPipe, MatchCardComponent]
})
export class LiveComponent implements OnInit{

  liveMatches: any;

  constructor(private apicall:ApiCallService){}

  ngOnInit(): void {
  this.loadLiveMatches();
  }


  private loadLiveMatches() {
    this.apicall.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatches = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
