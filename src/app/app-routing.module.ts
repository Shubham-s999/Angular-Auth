import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';



import { AuthGuard } from './shared/common/services/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { FinanceComponent } from './pages/finance/finance.component';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'managment',
    component: FinanceComponent,
    canActivate: [AuthGuard],
  },
  //Using Pathmatch Full mehod(for route with empty and redirectTo to equal route). this method need initial login path declaration
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  //Usig Pathmath Prefix method (default method to  search left from url upto path match). this mehtod does not need initial login path declaration
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   pathMatch: 'prefix'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutinModule {}
