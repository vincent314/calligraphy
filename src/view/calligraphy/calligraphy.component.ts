import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CalligraphyService } from "../../domain/services/calligraphy.service";
import { Calligraphy } from "../../domain/model/Calligraphy";
import { Observable } from "rxjs";
import { AsyncPipe, NgOptimizedImage } from "@angular/common";
import { ImageComponent } from "../image/image.component";

@Component({
  selector: 'app-calligraphy',
  standalone: true,
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    ImageComponent
  ],
  templateUrl: './calligraphy.component.html'
})
export class CalligraphyComponent {
  calligraphy$: Observable<Calligraphy | undefined>;

  constructor(route: ActivatedRoute, calligraphyService: CalligraphyService) {
    const id = parseInt(route.snapshot.paramMap.get("id")!);
    this.calligraphy$ = calligraphyService.getHaiku(id)
  }
}
