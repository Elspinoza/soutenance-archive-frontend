import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ThemeService } from 'src/app/_services/theme.service';

@Component({
  selector: 'app-theme-ui',
  templateUrl: './theme-ui.component.html',
  styleUrls: ['./theme-ui.component.css']
})
export class ThemeUiComponent {

constructor (
  private themeService: ThemeService,
  private toastr: ToastrService
) {}

  onAddTheme(themeForm: NgForm) {
    this.themeService.addTheme(themeForm.value).subscribe(
      (resp) => {
        console.log(resp);
        themeForm.reset();
        this.toastr.success("Thème ajouté avec succès");
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
