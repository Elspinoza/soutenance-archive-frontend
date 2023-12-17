import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Archive } from 'src/app/_models/archive.model';
import { Theme } from 'src/app/_models/theme.model';
import { ArchiveService } from 'src/app/_services/archive.service';
import { ThemeService } from 'src/app/_services/theme.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-archive',
  templateUrl: './admin-archive.component.html',
  styleUrls: ['./admin-archive.component.css']
})
export class AdminArchiveComponent implements OnInit{

  title!: 'Archive';
  titre: string = 'Archive';
  listArchive: any[] = [];
  theme: Theme[] = [];
  selectedThemeId: number | undefined;
  // listArchive: Archive[] = [];

  //Propriete pour la recherche
  searchText: string = '';
  filteredThemes: Theme[] = [];
  selectedTheme: Theme | undefined;



  @ViewChild("file",{static: false}) file!: ElementRef;

  constructor(
    private archiveService: ArchiveService,
    private themeService: ThemeService,
    private toastr: ToastrService
  ){}

  ngOnInit() {
    this.fetchAllArchive();
    this.fetchAllTheme();
    this.filteredThemes = this.theme;
  }

  updateFilteredItems(): void {
    // Filtrer les thèmes
    this.filteredThemes = this.theme.filter(them =>
      them.titre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  updateFilteredThemes(): void{
    this.filteredThemes = this.theme.filter(them =>
      them.titre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  fetchAllTheme() {
    this.themeService.showAllTheme().subscribe({
      next: (response) => {
        console.log(response);
        this.theme = response.themes;
        console.log(this.theme);
      },
      error(err) {
          console.log('Erreur du chargement', err);
      },
    });
  }




  fetchAllArchive() {
    this.archiveService.showAllArchive().subscribe({
      next:(resp) => {
        console.log(resp);
        this.listArchive = resp.archives;
        console.log(this.listArchive)
      },
      error(err) {
          console.log('Erreur de chargement', err)
      },
    });
  }

  onAddArchive(archiveForm: NgForm) {
    const formData = new FormData();
    formData.append('file', this.file.nativeElement.files[0])
    formData.append('parcours', archiveForm.value.parcours)
    formData.append('filiere', archiveForm.value.filiere)
    formData.append('administrateurId', archiveForm.value.administrateurId)
    formData.append('themeId', archiveForm.value.themeId)

     this.archiveService.addArchive(formData).subscribe(
      (resp) => {
        console.log(resp);
        archiveForm.reset();
        this.fetchAllArchive();
        this.toastr.success("Nouveau archive ajoutée avec succès");
      },
      (err) => {
        console.log(err)
      }
    )
  }

  onDeleteArchive(id: number) {
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

        this.archiveService.deleteArchive(id).subscribe(
          (resp) => {
            console.log(resp);
            this.fetchAllArchive();
          },
          err => {
            console.log(err)
          }
        )
      }
    })
  }


  //todo update methode
  edit(archive: Archive){

  }

}
