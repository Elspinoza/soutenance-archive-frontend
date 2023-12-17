import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { AdminVagueComponent } from './admin-vague/admin-vague.component';
import { CommonModule } from '@angular/common';
import { AdminPlateformeComponent } from './admin-plateforme/admin-plateforme.component';
import { AdminSpecialiteComponent } from './admin-specialite/admin-specialite.component';
import { AdminJuryComponent } from './admin-jury/admin-jury.component';
import { AdminProfessorComponent } from './admin-professor/admin-professor.component';
import { AdminThemeComponent } from './admin-theme/admin-theme.component';
import { AdminArchiveComponent } from './admin-archive/admin-archive.component';
// import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAuthGuardService } from './_services/admin-auth-guard.service';

const routes: Routes = [

  { path: '', component: AdminComponent,
    children: [
      { path: 'home', component:AdminDashboardComponent, canActivate: [AdminAuthGuardService] },
      { path: 'vague', component: AdminVagueComponent, canActivate: [AdminAuthGuardService] },
      { path: 'theme', component: AdminThemeComponent, canActivate: [AdminAuthGuardService] },
      { path: 'plateforme', component: AdminPlateformeComponent, canActivate: [AdminAuthGuardService] },
      { path: 'jury', component: AdminJuryComponent, canActivate: [AdminAuthGuardService] },
      { path: 'specialite', component: AdminSpecialiteComponent, canActivate: [AdminAuthGuardService] },
      { path: 'professor', component: AdminProfessorComponent, canActivate: [AdminAuthGuardService] },
      { path: 'archive', component: AdminArchiveComponent, canActivate: [AdminAuthGuardService] },
      // { path: 'auth', component: AdminLoginComponent },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
