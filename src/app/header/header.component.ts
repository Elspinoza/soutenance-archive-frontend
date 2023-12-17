import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  navbarActive = false;
  headerActive = false;

  constructor(private elementRef: ElementRef) {}

  toggleNavbar() {
    this.navbarActive = !this.navbarActive;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.headerActive = window.scrollY >= 20;
  }

  toggleClass(element: HTMLElement, className: string) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }

  onNavItemClick() {
    const navbar = this.elementRef.nativeElement.querySelector('[data-navbar]');
    const overlay = this.elementRef.nativeElement.querySelector('[data-overlay]');
    this.toggleClass(navbar, 'active');
    this.toggleClass(overlay, 'active');
  }


}
