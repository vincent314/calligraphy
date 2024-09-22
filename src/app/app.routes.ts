import { Routes } from '@angular/router';
import { ListComponent } from "../view/list/list.component";
import { CalligraphyComponent } from "../view/calligraphy/calligraphy.component";
import { LoginComponent } from "../view/login/login.component";
import { AuthGuard, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

const redirectUnauthorizedToLanding = () => redirectUnauthorizedTo(['login']);

const guard = {
  canActivate: [AuthGuard],
  data: { authGuardPipe: redirectUnauthorizedToLanding }
}

export const routes: Routes = [
  {
    path: '', component: ListComponent,
    ...guard
  },
  {
    path: 'calligraphy/:id',
    component: CalligraphyComponent,
    ...guard
  },
  { path: 'login', component: LoginComponent },
];
