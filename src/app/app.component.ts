import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from "../list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-calligraphy';
}
