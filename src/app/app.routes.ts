import { Routes } from '@angular/router';
import { ListComponent } from "../view/list/list.component";
import { CalligraphyComponent } from "../view/calligraphy/calligraphy.component";

export const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'calligraphy/:id', component: CalligraphyComponent},
];
