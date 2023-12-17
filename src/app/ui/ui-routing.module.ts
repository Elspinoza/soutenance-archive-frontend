import { Route, RouterModule, Routes } from "@angular/router";
import { UiComponent } from "./ui.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArchiveUiComponent } from "./archive-ui/archive-ui.component";
import { ThemeUiComponent } from "./theme-ui/theme-ui.component";


const routes: Routes = [
  { path: '', component: UiComponent,
    children: [
      { path: 'home', component: ArchiveUiComponent },
      { path: 'theme', component: ThemeUiComponent }
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
export class UIRoutingModule {}
