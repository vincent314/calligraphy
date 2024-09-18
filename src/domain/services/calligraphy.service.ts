import { Injectable } from '@angular/core';
import { JsonDataClient } from "../../clients/json-data.client";
import { Observable } from "rxjs";
import { Calligraphy } from "../model/Calligraphy";

@Injectable({
  providedIn: 'root'
})
export class CalligraphyService {

  constructor(private jsonDataClient:JsonDataClient) {  }

  getHaikus(): Observable<Calligraphy[]> {
    return this.jsonDataClient.getHaikus();
  }
}
