import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Theme } from 'src/app/_models/theme.model';
import { ThemeService } from 'src/app/_services/theme.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-theme',
  templateUrl: './admin-theme.component.html',
  styleUrls: ['./admin-theme.component.css']
})
export class AdminThemeComponent implements OnInit{

  title!: 'Theme';
  titre: string = 'Theme';
  listTheme: Theme[] = [];

  constructor(
    private themeService: ThemeService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.fetchAllTheme();
  }


  fetchAllTheme() {
    this.themeService.showAllTheme().subscribe({
      next: (response) => {
        console.log(response);
        this.listTheme = response.themes;
        console.log(this.listTheme);
      },
      error(err) {
          console.log('Erreur du chargement', err);
      },
    });
  }

  onAddTheme(themeForm: NgForm) {
    this.themeService.addTheme(themeForm.value).subscribe(
      (resp) => {
        console.log(resp);
        themeForm.reset();
        this.fetchAllTheme();
        this.toastr.success("Thème ajouté avec succès");
      },
      (err) => {
        console.log(err)
      }
    )
  }

  onDeleteTheme(id: number) {
    console.log(id);
    //message
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      html: 'Si vous supprimez ce document, vous ne pourrez pas le rétablir ? Êtes-vous sûr de vouloir supprimer ce document ?',
      showDenyButton: true,
      confirmButtonText: 'Supprimer',
      denyButtonText: `Ne pas Supprimer`
    }).then(res => {
      console.log(res);
      if (res.isConfirmed) {

        this.themeService.deleteTheme(id).subscribe(
          (resp) => {
            console.log(resp);
            this.fetchAllTheme();
          },
          err => {
            console.log(err)
          }
        )
      }
    })
  }


  //todo update methode
  edit(theme: Theme){

  }



}
