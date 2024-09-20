import { Component, Input } from '@angular/core';
import { Calligraphy } from "../../domain/model/Calligraphy";
import { DatePipe, NgOptimizedImage, SlicePipe } from "@angular/common";
import { Router } from "@angular/router";
import { ImageComponent } from "../image/image.component";

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    SlicePipe,
    NgOptimizedImage,
    DatePipe,
    ImageComponent
  ],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  @Input({ required: true }) calligraphy!: Calligraphy;

  constructor(private router:Router) {}

  goToCalligraphy(id:number){
    return this.router.navigate([`/calligraphy/${id}`]);
  }
}
