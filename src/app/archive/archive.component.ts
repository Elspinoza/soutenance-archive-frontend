import { Component, OnInit } from '@angular/core';
import { Archive } from '../_models/archive.model';
import { ArchiveService } from '../_services/archive.service';
import { NgForm } from '@angular/forms';
import { Theme } from '../_models/theme.model';
import { ThemeService } from '../_services/theme.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  listArchive: Archive[] = [];
  listTheme: Theme[] = [];


  constructor(
    private archiveService: ArchiveService,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    // this.OnshowAllArchive();
    this.fetchAllArchive();
    this.fetchAllTheme();
  }



  fetchAllTheme() {
    this.themeService.showAllTheme().subscribe({
      next: (response) => {
        console.log(response);
        this.listTheme = response.themes;
        console.log(this.listTheme)
      },
      error(error) {
        console.log('Erreur lors de la récupération des thèmes disponibles :', error);
      }
    }
      // (themes: Theme[]) => {
      //   this.listTheme = themes;
      // },
    );
  }

  fetchAllArchive() {
    this.archiveService.showAllArchive().subscribe({
      next: (response) => {
        console.log(response);
        this.listArchive = response.archives;
        console.log(this.listArchive)
      // (archives: Archive[]) => {
      //   this.listArchive = archives;
      },
      error(error) {
        console.log('Erreur lors de la récupération des archives :', error);
      },
  });
  }

  // onUpload(archiveForm: NgForm) {
  //   if (archiveForm.invalid) {
  //     return;
  //   }


  //   console.log(archiveForm.value);
  //   this.archiveService
  //     .addArchive(archiveForm.value)
  //     .subscribe( archive => this.listArchive.push(archive)
  //   );
  // }


  onUpload(archiveForm: NgForm) {
    if (archiveForm.invalid) {
      return;
    }
  }

  //   const newArchive: Archive = {
  //     themeId: archiveForm.value.themeId,
  //     parcours: archiveForm.value.parcours,
  //     filiere: archiveForm.value.filiere,
  //     fileLink: archiveForm.value.fileLink,
  //     administrateurId: archiveForm.value.administrateurId
  //   };

  //   console.log(newArchive);
  //   this.archiveService.addArchive(newArchive).subscribe({
  //     next: (archive) => {
  //       console.log(archive);
  //       this.listArchive.push(archive);
  //     },
  //     error(error) {
  //       console.log('Erreur lors de l\'ajout de l\'archive :', error);
  //     }
  //   });
  // }


  // OnAddArchive(archiveForm: NgForm) {
  //   if (archiveForm.invalid) {
  //     return;
  //   }

  //   const newArchive: Archive = {
  //     themeId: archiveForm.value.themeId,
  //     parcours: archiveForm.value.parcours,
  //     filiere: archiveForm.value.filiere,
  //     fileLink: archiveForm.value.fileLink,
  //     administrateurId: archiveForm.value.administrateurId
  //   };


  //   console.log(newArchive);
  //   this.archiveService
  //     .addArchive(archiveForm.value)
  //     .subscribe(archive => this.listArchive.push(archive)
  //   );

        // console.log(archiveForm.value);
        // this.archiveService
        //   .addArchive(archiveForm.value)
        //   .subscribe(archive => this.listArchive.push(archive)
        // );




  //   this.archiveService.addArchive(newArchive).subscribe(
  //    { (archive: Archive) => {
  //       this.listArchive.push(archive);
  //       archiveForm.reset();
  //     },
  //     (error) => {
  //       console.log('Erreur lors de l\'ajout de l\'archive :', error);
  //     }}
  //   );
  // }








  // public OnshowAllArchive() {
  //   this.archiveService.showAllLieu().subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       this.listArchive = response.archives_list;
  //       console.log(this.listArchive)
  //     },
  //     error(err) {

  //     },
  //   });
  // }


  // public OnAddArchive(archiveForm: NgForm) {
  //   console.log(archiveForm.value);
  //   this.archiveService
  //     .addArchive(archiveForm.value)
  //     .subscribe(archive => this.listArchive.push(archive)
  //   );
  // }

}
