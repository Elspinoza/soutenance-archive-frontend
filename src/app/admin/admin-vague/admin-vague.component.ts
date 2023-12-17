import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Vague } from 'src/app/_models/vague.model';
import { VagueService } from 'src/app/_services/vague.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-vague',
  templateUrl: './admin-vague.component.html',
  styleUrls: ['./admin-vague.component.css']
})
export class AdminVagueComponent implements OnInit{

  title!: 'Vague';
  titre: string = 'Vague';
  listVague: Vague[] = [];

  vagueToUpdate = {
    id: 0,
    mois: "",
    annee: 0,
  };

  constructor(
    private vagueService: VagueService,
    private toastr: ToastrService) {}

  ngOnInit() {
    this.fetchAllVague();
  }

  fetchAllVague() {
    this.vagueService.showAllArchive().subscribe({
      next:(response) => {
        console.log(response);
        this.listVague = response.vagues_list;
        console.log(this.listVague)
      },
      error(err) {
          console.log('Erreur du chargement',err);
      },
    });
  }

  // onAddVague(vagueForm: NgForm) {
  //   if(vagueForm.invalid) {
  //     return;
  //   }
  //   // Swal.fire("Anwsome!","You have completed the course", "success")
  //   // this.toastr.success('Hello world!', 'Toastr fun!');
  //   this.toastr.success("Vague added successufly");
  //   console.log(vagueForm.value);
  //   this.vagueService
  //     .addVague(vagueForm.value)
  //     .subscribe(vague => this.listVague.push(vague)
  //   );
  // }


  onAddVague(vagueForm: NgForm) {
    this.vagueService.addVague(vagueForm.value).subscribe(
      (resp) =>{
        console.log(resp);
        vagueForm.reset();
        this.fetchAllVague();
        this.toastr.success("Vague ajoutée avec succès");

      },
      (err) =>{
        console.log(err)
      }
    )
  }



  onDeleteVague(id: number) {
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
        //premier methode
        // this.vagueService.deleteVague(id).subscribe({
        //   next:(response) => {
        //     console.log(response);
        //   },
        //   error(err) {
        //       console.log('erreur de suppression', err);
        //   },
        // });
        //fin de la premiere methode

        //2eme methode
        this.vagueService.deleteVague(id).subscribe(
          (resp) => {
            console.log(resp);
            this.fetchAllVague();
          },
          err => {
            console.log(err)
          }
        )//fin de la 2eme methode
      }
    })
  }

  // onUpdateVague(id: number, vague: Vague) {
  //   this.vagueService.updateVague(id, vague).subscribe({
  //     next:(response) =>{
  //       console.log(response);
  //     },
  //     error(err) {
  //         console.log("erreur de mis a jour")
  //     },
  //   });
  // }
  // onUpdateVague() {
  //   this.vagueService.updateVague(this.vagueToUpdate).subscribe({
  //     next:(response) =>{
  //       console.log(response);
  //     },
  //     error(err) {
  //         console.log("erreur de mis a jour")
  //     },
  //   });
  // }

  edit(vague:Vague) {
    this.vagueToUpdate = vague;
  }

  updateVague(vagueUpdateForm:NgForm){
    this.vagueService.updateVague(this.vagueToUpdate).subscribe({
      next:(resp) => {
        console.log(resp);
        window.location.reload();
      },
      error: (err) => {
        console.log(err);
      }
  });
  }

}

