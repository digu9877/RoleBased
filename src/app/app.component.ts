import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from './Helper/constants';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webAuth';

  constructor(private router: Router) {

    if (this.isUserlogin) {
      this.router.navigate(["/user-management"]);
    }

  }
  onLogout() {
    localStorage.removeItem(Constants.USER_KEY);

  }
  get isUserlogin() {
    const user = localStorage.getItem(Constants.USER_KEY);
    return user && user.length > 0;
  }

  get user(): User {
    return JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
  }

  get isAdmin(): boolean {
    return this.user.roles=='Admin';
  }
  get isUser(): boolean {
    return this.user.roles=='User' && !this.isAdmin;
  }

}
