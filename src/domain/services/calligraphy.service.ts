import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Calligraphy } from "../model/Calligraphy";
import { RealTimeService } from "../../clients/real-time.service";
import { fromPromise } from "rxjs/internal/observable/innerFrom";

@Injectable({
  providedIn: 'root'
})
export class CalligraphyService {

  constructor(private realTimeService: RealTimeService) {  }

  getHaikus(): Observable<Calligraphy[]> {
    return fromPromise(this.realTimeService.getCalligraphies());
  }

  getHaiku(id:number): Observable<Calligraphy | undefined> {
    return fromPromise(this.realTimeService.getCalligraphy(id));
  }
}
