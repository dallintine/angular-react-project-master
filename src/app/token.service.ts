import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { UserManager } from 'oidc-client';
import { authConfig } from './autho.service';
import { HomeComponent } from './home/home.component';

// const ACCESS_TOKEN = 'access_token';
// const REFRESH_TOKEN ='refresh_token';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: ProfileComponent ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authService;
        if (user) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
