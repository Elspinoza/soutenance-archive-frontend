import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Specialite } from 'src/app/_models/specialite.model';
import { SpecialiteService } from 'src/app/_services/specialite.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-specialite',
  templateUrl: './admin-specialite.component.html',
  styleUrls: ['./admin-specialite.component.css']
})
export class AdminSpecialiteComponent implements OnInit {

  title!: 'Specialite';
  titre: string = 'Specialite';
  listSpecialite: Specialite[] = [];

  specialiteToUpdate = {
    id: 0,
    intitule: "",
  };

  constructor(
    private specialiteService: SpecialiteService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
      this.fetchAllSpecialite();
  }

  fetchAllSpecialite(){
    this.specialiteService.showAllSpecialite().subscribe({
      next:(response) => {
        console.log(response);
        this.listSpecialite = response.Specialite;
        console.log(this.listSpecialite)
      },
      error(err) {
          console.log("Erreur du chargement",err);
      },
    });
  }

  onAddSpecialite(specialiteForm: NgForm) {
    this.specialiteService.addSpecialite(specialiteForm.value).subscribe(
      (resp) =>{
        console.log(resp);
        specialiteForm.reset();
        this.fetchAllSpecialite();
        this.toastr.success("Specialite ajouté avec succès");
      },
      (err) => {
        console.log(err)
      }
    )
  }

  onDeleteSpecialite(id: number) {
    console.log(id);
    //message
    Swal.fire({
      title: 'Are you sure?',
      html: 'If you delete this you cannot revert it? Are you sure you want to delete this?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't deleted`
    }).then(res => {
      console.log(res);
      if (res.isConfirmed) {
        //methode
        this.specialiteService.deleteSpecialite(id).subscribe(
          (resp) => {
            console.log(resp);
            this.fetchAllSpecialite();
          },
          err => {
            console.log(err)
          }
        )//fin de la methode
      }
    })
  }


  edit(specialite: Specialite) {
    this.specialiteToUpdate = specialite;
  }

  updateSpecialite(specialiteUpdateForm:NgForm){
    this.specialiteService.updateSpecialite(this.specialiteToUpdate).subscribe({
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
