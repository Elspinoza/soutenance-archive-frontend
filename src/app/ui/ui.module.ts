import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { HeaderUiComponent } from './header-ui/header-ui.component';
import { SideNavUiComponent } from './side-nav-ui/side-nav-ui.component';
import { UIRoutingModule } from './ui-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { ArchiveUiComponent } from './archive-ui/archive-ui.component';
import { ThemeUiComponent } from './theme-ui/theme-ui.component';



@NgModule({
  declarations: [
    UiComponent,
    HeaderUiComponent,
    SideNavUiComponent,
    ArchiveUiComponent,
    ThemeUiComponent
  ],
  imports: [
    UIRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot()
  ],

  exports:[
    UiComponent,
  ],

  providers: [],
  // bootstrap: [AdminComponent]
})
export class UIModule { }
