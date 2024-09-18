import { Component, Input } from '@angular/core';
import { Calligraphy } from "../../domain/model/Calligraphy";
import { DatePipe, NgOptimizedImage, SlicePipe } from "@angular/common";

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    SlicePipe,
    NgOptimizedImage,
    DatePipe
  ],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  @Input({ required: true }) calligraphy!: Calligraphy;
}
