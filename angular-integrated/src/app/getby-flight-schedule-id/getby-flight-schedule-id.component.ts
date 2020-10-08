import { Component} from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { FlightSchedule } from '../model/flightschedule';
import { FlightScheduleService } from '../service/flightscheduleservice';

@Component({
  selector: 'app-getby-flight-schedule-id',
  templateUrl: './getby-flight-schedule-id.component.html',
  styleUrls: ['./getby-flight-schedule-id.component.css']
})
export class GetbyFlightScheduleIdComponent{
  flightSchedule:FlightSchedule;

  constructor(private flightscheduleserv:FlightScheduleService) {
  }
 
   findById(form){
     let details=form.value;
     let id=details.fid;
     console.log(id);
     let observable:Observable<FlightSchedule>=this.flightscheduleserv.getbyFlightScheduleId(id);
     observable.subscribe(
       flightArg=>{
         this.flightSchedule=flightArg},
     );
   }
}
