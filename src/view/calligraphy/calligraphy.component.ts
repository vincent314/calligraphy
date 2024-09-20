import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CalligraphyService } from "../../domain/services/calligraphy.service";
import { Calligraphy } from "../../domain/model/Calligraphy";
import { Observable } from "rxjs";
import { AsyncPipe, DatePipe, NgOptimizedImage } from "@angular/common";
import { ImageComponent } from "../image/image.component";
import { NG_ICON_DIRECTIVES, NgIcon, NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroHomeSolid } from "@ng-icons/heroicons/solid";

@Component({
  selector: 'app-calligraphy',
  standalone: true,
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    ImageComponent,
    NgIcon,
    NgIconComponent,
    RouterLink,
    DatePipe
  ],
  templateUrl: './calligraphy.component.html',
  viewProviders: [provideIcons({heroHomeSolid})]
})
export class CalligraphyComponent {
  calligraphy$: Observable<Calligraphy | undefined>;

  constructor(route: ActivatedRoute, calligraphyService: CalligraphyService) {
    const id = parseInt(route.snapshot.paramMap.get("id")!);
    this.calligraphy$ = calligraphyService.getHaiku(id)
  }

  protected readonly NG_ICON_DIRECTIVES = NG_ICON_DIRECTIVES;
}
