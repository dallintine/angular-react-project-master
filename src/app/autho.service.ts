import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
// import { TokenService }from './token.service';
import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthService } from 'angular-oauth2-oidc';

//@Injectable({providedIn: 'root'})

export const authConfig: AuthConfig = {
      issuer: 'https://id-sandbox.cashtoken.africa',
      clientId: 'wprQYMZBqqx-dgszFUfQG',
      responseType: 'code',
      scope: 'openid email profile',
      redirectUri: 'https://oauth2filetoken.herokuapp.com/profile',

    
      // post_logout_redirect_uri: '${Constants.clientRoot}',
      // userStore: new webStorageStateStore({store: window.localStorage})
       

  
  
}
 
 


