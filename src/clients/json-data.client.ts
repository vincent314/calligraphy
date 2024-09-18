import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Calligraphy } from "../domain/model/Calligraphy";

@Injectable({
  providedIn: 'root',
})
export class JsonDataClient {

  constructor(private httpClient:HttpClient) {
  }

  getHaikus(): Observable<Calligraphy[]> {
    return this.httpClient.get<Calligraphy[]>("./haiku.json");
  }
}
