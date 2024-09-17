import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Calligraphy } from "../model/Calligraphy";
import { AsyncPipe, NgOptimizedImage, SlicePipe } from "@angular/common";
import { Observable } from "rxjs";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SlicePipe,
    AsyncPipe
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  calligraphies$: Observable<Calligraphy[]>;

  constructor(private httpClient: HttpClient) {
    this.calligraphies$ =  this.httpClient.get<Calligraphy[]>("./haiku.json");
  }
}
