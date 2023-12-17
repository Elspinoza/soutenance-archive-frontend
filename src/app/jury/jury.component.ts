import { Component, OnInit } from '@angular/core';
import { Jury } from '../_models/jury.model';
import { JuryService } from '../_services/jury.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-jury',
  templateUrl: './jury.component.html',
  styleUrls: ['./jury.component.css']
})
export class JuryComponent implements OnInit {

  listJury : Jury[] = []

  constructor(private juryService : JuryService) { }

  ngOnInit() {
    this.fetchAllJury();
  }

  fetchAllJury() {
    this.juryService.showAllJury().subscribe({
      next: (response) =>{
        console.log(response);
        this.listJury = response.Jury_List;
        console.log(this.listJury);
      }
    });
  }

  onAddJury(juryForm: NgForm) {
    if(juryForm.invalid){
      return;
    }

    console.log(juryForm.value)
    this.juryService
      .addJury(juryForm.value)
      .subscribe(jury => this.listJury.push(jury)
    );
  }

}
