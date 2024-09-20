import { Component, Input } from '@angular/core';
import { Img } from "../../domain/model/Img";
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './image.component.html',
})
export class ImageComponent {
  @Input() img!: Img;
}
