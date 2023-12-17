import { Component } from '@angular/core';
import { AdminAuthService } from '../_services/admin-auth.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {

  constructor (private auth: AdminAuthService) {}

  onLogout() {
    this.auth.logout();
  }

}
