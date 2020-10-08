import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ScheduleService } from './service/scheduleservice';
import { CreatescheduleComponent } from './createschedule/createschedule.component';
import { CreateflightscheduleComponent } from './createflightschedule/createflightschedule.component';
import { FlightScheduleService } from './service/flightscheduleservice';
import { GetallflightscheduleComponent } from './getallflightschedule/getallflightschedule.component';
import { GetbyFlightScheduleIdComponent } from './getby-flight-schedule-id/getby-flight-schedule-id.component';
import { GetallschedulesComponent } from './getallschedules/getallschedules.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatescheduleComponent,
    CreateflightscheduleComponent,
    GetallflightscheduleComponent,
    GetbyFlightScheduleIdComponent,
    GetallschedulesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [HttpClient,ScheduleService,FlightScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
