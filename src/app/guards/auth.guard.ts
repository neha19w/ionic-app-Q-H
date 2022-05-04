import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private loginservice: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginservice.isUserLogin()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
