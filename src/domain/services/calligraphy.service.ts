import { Injectable } from '@angular/core';
import { JsonDataClient } from "../../clients/json-data.client";
import { map, Observable } from "rxjs";
import { Calligraphy } from "../model/Calligraphy";

@Injectable({
  providedIn: 'root'
})
export class CalligraphyService {

  constructor(private jsonDataClient:JsonDataClient) {  }

  getHaikus(): Observable<Calligraphy[]> {
    return this.jsonDataClient.getHaikus();
  }

  getHaiku(id:number): Observable<Calligraphy | undefined> {
    return this.getHaikus()
      .pipe(map(calligraphyList => calligraphyList.find(c => c.id === id)));
  }
}
