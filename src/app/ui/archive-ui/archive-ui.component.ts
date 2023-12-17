import { Component, OnInit } from '@angular/core';
import { ArchiveService } from 'src/app/_services/archive.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-archive-ui',
  templateUrl: './archive-ui.component.html',
  styleUrls: ['./archive-ui.component.css']
})
export class ArchiveUiComponent implements OnInit {

  listArchive: any[] = [];
  searchKeyword: string = '';

  constructor (
    private auth: AuthService,
    private archiveService: ArchiveService
  ) {  }


  ngOnInit() {
    this.fetchAllArchive();
  }

  onLogout() {
    this.auth.logout();
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

  searchArchive(searchKeyword: string) {
    if(searchKeyword.trim() !== '') {
      this.archiveService.searchOnArchive(searchKeyword).subscribe({
        next: (resp) => {
          console.log(resp);
          this.listArchive = resp.archives;
          // console.log(this.listArchive);
        },
        error(err) {
            console.log('Erreur de chargement', err);
        },
      });
    } else {
      this.fetchAllArchive();
    }
  }


}
