import {Component, inject, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ecom-angular-app';
   profile: any;
  constructor(public ks: KeycloakService) {
  }

  ngOnInit() {
    if(this.ks.isLoggedIn()){
      this.ks.loadUserProfile()
          .then(profile =>{
            this.profile=profile
          })
    }
  }

  async handleLogin(){
    await this.ks.login({
      redirectUri: window.location.origin
    })
  }

  handleLogout(){
    this.ks.logout(window.location.origin)
  }
}
