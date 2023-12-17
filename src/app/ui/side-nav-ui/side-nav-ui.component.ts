import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-side-nav-ui',
  templateUrl: './side-nav-ui.component.html',
  styleUrls: ['./side-nav-ui.component.css']
})
export class SideNavUiComponent {

  constructor (private auth: AuthService) {}

  onLogout() {
    this.auth.logout()
  }

}
