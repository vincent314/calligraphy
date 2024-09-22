import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { LoginModel } from "../../domain/model/LoginModel";
import { Auth, signInWithEmailAndPassword } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private auth: Auth, private router: Router) {
  }

  login(login: LoginModel) {
    const { email, password } = login;

    signInWithEmailAndPassword(this.auth, email, password)
      .then(() => this.router.navigate(['/']))
      .catch((error) => {
        console.log('error', error)
      });
  }
}
