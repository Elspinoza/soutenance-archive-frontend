import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../_services/admin-auth.service';
import { Users } from 'src/app/_models/users.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email: string = '';
  password: string = '';


  constructor (
    private auth: AdminAuthService
    ) {}

  ngOnInit(): void {
  }

  // saveUser(loginForm: NgForm){
  //   console.log(loginForm.value);
  // }


  onLoginAdmin() {
    if(this.email == ''){
      alert('Veuillez rentré votre adresse email');
      return;
    }
    if(this.password == ''){
      alert('Veuillez saisir votre mot de passe');
      return;
    }


    this.auth.login(this.email,this.password);

    this.email = '';
    this.password = '';

  }



}
