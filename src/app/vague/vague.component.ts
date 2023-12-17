import { Component, OnInit } from '@angular/core';
import { VagueService } from '../_services/vague.service';
import { Vague } from '../_models/vague.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vague',
  templateUrl: './vague.component.html',
  styleUrls: ['./vague.component.css']
})
export class VagueComponent implements OnInit{

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
        this.toastr.success("Vague added successufly");

      },
      (err) =>{
        console.log(err)
      }
    )
  }



  onDeleteVague(id: number) {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      html: 'If you delete this you cannot revert it? Are you sure you want to delete this?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't deleted`
    }).then(res => {
      console.log(res);
      if (res.isConfirmed) {
        // this.vagueService.deleteVague(id).subscribe({
        //   next:(response) => {
        //     console.log(response);
        //   },
        //   error(err) {
        //       console.log('erreur de suppression', err);
        //   },
        // });

        this.vagueService.deleteVague(id).subscribe(
          (resp) => {
            console.log(resp);
            this.fetchAllVague();
          },
          err => {
            console.log(err)
          }
        )
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
      },
      error: (err) => {
        console.log(err);
      }
  });
  }

}
