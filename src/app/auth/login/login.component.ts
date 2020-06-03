import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private afAutf: AngularFireAuth) { 
    
  }


  login(){
   this.afAutf.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

}
