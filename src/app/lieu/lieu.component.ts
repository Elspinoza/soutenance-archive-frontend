// import { Component, OnInit } from '@angular/core';
// import { Lieu } from '../_models/vague.model';
// import { LieuService } from '../_services/lieu.service';
// import { FormControl, NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-lieu',
//   templateUrl: './lieu.component.html',
//   styleUrls: ['./lieu.component.css']
// })
// export class LieuComponent implements OnInit {

//   listLieu: Lieu[] = [];


//   constructor(private lieuService: LieuService) { }

//   ngOnInit() {
//     this.OnShowAllLieu();
//   }

//   public OnShowAllLieu() {
//     this.lieuService.showAllLieu().subscribe({
//       next: (response) => {
//         console.log(response);
//         this.listLieu = response.lieux;
//         console.log(this.listLieu);
//       },
//       error(err) {

//       },
//     }
//     );
//   }


//   public OnAddLieu(f: NgForm) {
//     console.log(f.value);
//     this.lieuService
//       .addLieu(f.value)
//       .subscribe(lieu => this.listLieu.push(lieu)
//       );
//   }


// }
