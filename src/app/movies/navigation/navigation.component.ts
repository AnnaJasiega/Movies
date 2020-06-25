import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  url

  constructor(private auth: AuthService, private route: ActivatedRoute) { 
  }

  logout() {
    this.auth.logout();
  }

  getUrl(){
    this.route.snapshot.paramMap.getAll
  };

  login() {
    this.getUrl();
    console.log(this.url)
    //this.router.navigate(['/login'], { queryParams: {returnUrl: returnState}})
  }  
}
