import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './admin.component';
import { AdminVagueComponent } from './admin-vague/admin-vague.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { CommonModule } from '@angular/common';
import { AdminJuryComponent } from './admin-jury/admin-jury.component';
import { AdminSpecialiteComponent } from './admin-specialite/admin-specialite.component';
import { AdminPlateformeComponent } from './admin-plateforme/admin-plateforme.component';
import { AdminArchiveComponent } from './admin-archive/admin-archive.component';
import { AdminProfessorComponent } from './admin-professor/admin-professor.component';
import { AdminThemeComponent } from './admin-theme/admin-theme.component';
import { AdminUploadComponent } from './admin-upload/admin-upload.component';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AdminComponent,
    AdminVagueComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminJuryComponent,
    AdminSpecialiteComponent,
    AdminPlateformeComponent,
    AdminArchiveComponent,
    AdminProfessorComponent,
    AdminThemeComponent,
    AdminUploadComponent,

  ],
  imports: [
    AdminRoutingModule,
    FormsModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseAdmin),

  ],

  exports:[
    AdminComponent,
  ],

  providers: [],
  // bootstrap: [AdminComponent]
})
export class AdminModule { }
