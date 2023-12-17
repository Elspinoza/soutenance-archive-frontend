import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../admin/_services/admin-auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-ad',
  templateUrl: './login-ad.component.html',
  styleUrls: ['./login-ad.component.css']
})
export class LoginAdComponent implements OnInit {

  // loginForm!: FormGroup;

  email: string = '';
  password: string = '';

  // user: Users = new Users();

  constructor (
    private auth: AdminAuthService,
    // private fb : FormBuilder
    ) {}

  ngOnInit(): void {

    // this.loginForm = this.fb.group({
    //   email: ['',[ Validators.required, Validators.email]]
    // });

  }

  saveUser(loginForm: NgForm){
    console.log(loginForm.value);
  }


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
