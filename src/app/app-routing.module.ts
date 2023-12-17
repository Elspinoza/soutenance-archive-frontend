import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
// import { ArchiveComponent } from './archive/archive.component';
// import { JuryComponent } from './jury/jury.component';
// import { ThemeComponent } from './theme/theme.component';
// import { AuthGuardService } from './_services/auth-guard.service';
import { LoginAdComponent } from './login-ad/login-ad.component';

const routes: Routes = [

  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', loadChildren: () => import ('./admin/admin.module').then((m)=>m.AdminModule)},
  { path: 'eduland', loadChildren: () => import ('./ui/ui.module').then((u) => u.UIModule)},
  { path: 'admin/login', component: LoginAdComponent},
  // { path: 'archive', component: ArchiveComponent },
  // { path: 'jury', component: JuryComponent},
  // { path: 'theme', component: ThemeComponent, canActivate:[AuthGuardService]},
  // { path: 'eduland/dashbord', component: MainComponent, canActivate:[AuthGuardService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
