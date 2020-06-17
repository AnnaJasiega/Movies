import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  name: string='anonym';
 
  constructor(private auth: AuthService, private router: Router) { 
  }

  logout() {
    this.auth.logout();
  }

  login(state: RouterStateSnapshot){
    this.router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
  }  
}
