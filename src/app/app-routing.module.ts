import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './token.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
    // { path: 'protected', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent },
    { path: '**', redirectTo: '/' }

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
