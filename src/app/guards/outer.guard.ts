import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OuterGuard implements CanActivate {

  constructor(private loginservice: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginservice.isUserLogin()) {
      this.router.navigateByUrl('/tabs');
      return false;
    } else {
      return true;
    }
  }
}
