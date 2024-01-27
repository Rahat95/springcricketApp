import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component:HomeComponent,
  title:'Home Page | cricketInformer'},
  {path:"history", component:HistoryComponent,title:'History | cricketInformer'},
  {path:"live", component:LiveComponent,title:'live matches | cricketInformer'},
  {path:"point-table", component:PointTableComponent,title:'Point table | cricketInformer'}
];
