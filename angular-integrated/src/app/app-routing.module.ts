import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateflightscheduleComponent } from './createflightschedule/createflightschedule.component';
import { CreatescheduleComponent } from './createschedule/createschedule.component';
import { GetallflightscheduleComponent } from './getallflightschedule/getallflightschedule.component';
import { GetallschedulesComponent } from './getallschedules/getallschedules.component';
import { GetbyFlightScheduleIdComponent } from './getby-flight-schedule-id/getby-flight-schedule-id.component';

const routes: Routes = [

  {
    path:"app-createschedule",
    component:CreatescheduleComponent
  },
  {
    path:"app-getallschedules",
    component:GetallschedulesComponent
  },
  {
    path:"app-createflightschedule",
    component:CreateflightscheduleComponent
  },
  {
    path:"app-getallflightschedule",
    component:GetallflightscheduleComponent
  },
  {
    path:"app-getby-flight-schedule-id",
    component:GetbyFlightScheduleIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
