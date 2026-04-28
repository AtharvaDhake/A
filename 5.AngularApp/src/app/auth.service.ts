import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersKey = 'angular_users';
  private currentUserKey = 'angular_current_user';

  constructor() {}

  register(user: any): boolean {
    const users = this.getUsers();
    if (users.find((u: any) => u.email === user.email)) {
      return false; // User already exists
    }
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return true;
  }

  login(credentials: any): boolean {
    const users = this.getUsers();
    const user = users.find((u: any) => u.email === credentials.email && u.password === credentials.password);
    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.currentUserKey);
  }

  getCurrentUser(): any {
    const user = localStorage.getItem(this.currentUserKey);
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  private getUsers(): any[] {
    const users = localStorage.getItem(this.usersKey);
    return users ? JSON.parse(users) : [];
  }
}
