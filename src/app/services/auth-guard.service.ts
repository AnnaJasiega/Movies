import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) {};

  canActivate(route, state: RouterStateSnapshot) {
    console.log("ANIAAA")
    return this.auth.user$.pipe(map(user => {
      console.log("ANIAAA")
      if (user) return true
      
      this.router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
      return false
    }))
  }
}