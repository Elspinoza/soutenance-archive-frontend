import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const body = document.querySelector("body") as HTMLElement;
    const darkLight = document.querySelector("#darkLight") as HTMLElement;
    const sidebar = document.querySelector(".sidebar") as HTMLElement;
    const mainContent = document.querySelector(".main-content") as HTMLElement;
    const submenuItems = document.querySelectorAll(".submenu_item");
    const sidebarOpen = document.querySelector("#sidebarOpen") as HTMLElement;
    const sidebarClose = document.querySelector(".collapse_sidebar") as HTMLElement;
    const sidebarExpand = document.querySelector(".expand_sidebar") as HTMLElement;

    sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

    sidebarClose.addEventListener("click", () => {
      sidebar.classList.add("close", "hoverable");
      mainContent.classList.add("fopen");
    });

    sidebarExpand.addEventListener("click", () => {
      sidebar.classList.remove("close", "hoverable");
    });

    sidebar.addEventListener("mouseenter", () => {
      if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
        mainContent.classList.remove("fopen");
      }
    });

    sidebar.addEventListener("mouseleave", () => {
      if (sidebar.classList.contains("hoverable")) {
        mainContent.classList.add("fopen");
        sidebar.classList.add("close");
      }
    });

    darkLight.addEventListener("click", () => {
      body.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        // Faites quelque chose ici lorsque le mode sombre est activé
        darkLight.classList.replace("bx-sun", "bx-moon");
      } else {
        // Faites quelque chose ici lorsque le mode sombre est désactivé
        darkLight.classList.replace("bx-moon", "bx-sun");
      }
    });

    submenuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        item.classList.toggle("show_submenu");
        submenuItems.forEach((item2, index2) => {
          if (index !== index2) {
            item2.classList.remove("show_submenu");
          }
        });
      });
    });

    if (window.innerWidth < 768) {
      sidebar.classList.add("close");
    } else {
      sidebar.classList.remove("close");
    }
  }
}
