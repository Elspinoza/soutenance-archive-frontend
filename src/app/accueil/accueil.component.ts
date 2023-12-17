import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  navbarActive = false;
  headerActive = false;
  goTopActive = false;

  toggleNavbar() {
    this.navbarActive = !this.navbarActive;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.headerActive = window.scrollY >= 20;
    this.goTopActive = window.scrollY >= 800;
  }


}
