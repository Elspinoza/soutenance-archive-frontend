import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component';
import { HomeComponent } from './home/home.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { ArchiveComponent } from './archive/archive.component';
import { JuryComponent } from './jury/jury.component';
import { PlateformeComponent } from './plateforme/plateforme.component';
import { ThemeComponent } from './theme/theme.component';
import { VagueComponent } from './vague/vague.component';
import { HeaderUiComponent } from './ui/header-ui/header-ui.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminVagueComponent } from './admin/admin-vague/admin-vague.component';
import { CommonModule } from '@angular/common';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LoginAdComponent } from './login-ad/login-ad.component';
// import { UiComponent } from './ui/ui.component';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    TwoFactorAuthComponent,
    HomeComponent,
    SpecialiteComponent,
    // LieuComponent,
    ArchiveComponent,
    // EnseignantComponent,
    JuryComponent,
    PlateformeComponent,
    ThemeComponent,
    VagueComponent,
    // UiComponent,
    // HeaderUiComponent,
    LoginAdComponent,
    // AdminVagueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
