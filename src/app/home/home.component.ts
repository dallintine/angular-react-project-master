import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { UserManager } from 'oidc-client';
import { authConfig } from '../autho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private userManager:UserManager
  
  constructor(){
    const stsSettings = {
      authority: authConfig.issuer,
      client_id: authConfig.clientId,
      redirect_uri: authConfig.redirectUri,
      scope: authConfig.scope,
      response_type: authConfig.responseType}

    this.userManager = new UserManager(stsSettings);
    

  }
  


  login(){
  this.userManager.signinRedirect();
  }

  logout(){
    this.userManager.signoutRedirect();
  }

  

  ngOnInit(): void {
  }

}
