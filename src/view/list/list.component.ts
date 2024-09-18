import { Component } from '@angular/core';
import { AsyncPipe, NgOptimizedImage, SlicePipe } from "@angular/common";
import { Observable } from "rxjs";
import { Calligraphy } from "../../domain/model/Calligraphy";
import { ListItemComponent } from "../list-item/list-item.component";
import { CalligraphyService } from "../../domain/services/calligraphy.service";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SlicePipe,
    AsyncPipe,
    ListItemComponent
  ],
  templateUrl: './list.component.html',
})
export class ListComponent {
  calligraphies$: Observable<Calligraphy[]>;

  constructor(readonly calligraphyService:CalligraphyService) {
    this.calligraphies$ =  calligraphyService.getHaikus();
  }
}
