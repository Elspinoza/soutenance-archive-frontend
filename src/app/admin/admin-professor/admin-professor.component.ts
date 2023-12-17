import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Enseignant } from 'src/app/_models/enseignant.model';
import { EnseignantService } from 'src/app/_services/enseignant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-professor',
  templateUrl: './admin-professor.component.html',
  styleUrls: ['./admin-professor.component.css']
})
export class AdminProfessorComponent implements OnInit {

  listEnseignant: Enseignant[] = [];
  title!: 'Enseignant';
  titre: string = 'Enseignant';

  enseignantToUpdate = {
    id: 0,
    nom : "",
    prenom : "",
    email : "",
    tel : "",
    grade : "",
    };

  constructor(
    private enseignantService : EnseignantService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.fetchAllEnseignant();
  }

  fetchAllEnseignant() {
    this.enseignantService.showAllEnseignant().subscribe({
      next: (response) => {
        console.log(response);
        this.listEnseignant = response.enseignant_list;
        console.log(this.listEnseignant)
      },
      error(err) {
          console.log('Erreur de chargement',err);
      },
    });
  }

  onAddEnseignant(enseignantForm: NgForm) {
    this.enseignantService.addEnseignant(enseignantForm.value).subscribe(
      (resp) => {
        console.log(resp);
        enseignantForm.reset();
        this.fetchAllEnseignant();
        this.toastr.success("Enseignant enregister avec succès");
      },
      (err) => {
        console.log(err)
      }
    )
  }

  onDeleteEnseignant(id: number) {
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
        this.enseignantService.deleteEnseignant(id).subscribe(
          (resp) => {
            console.log(resp);
            this.fetchAllEnseignant();
          },
          err => {
            console.log(err)
          }
        )//fin de la methode
      }
    })
  }

  edit(enseignant: Enseignant) {
    this.enseignantToUpdate = enseignant;
  }

  updateEnseignant(specialiteUpdateForm:NgForm){
    this.enseignantService.updateEnseignant(this.enseignantToUpdate).subscribe({
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
