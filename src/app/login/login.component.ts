import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements AfterViewInit {
  // title = 'inno';
  inputs!: NodeListOf<Element>;
  toggle_btn!: NodeListOf<Element>;
  main!: Element;
  bullets!: NodeListOf<Element>;
  images!: NodeListOf<Element>;

  email: string = '';
  password: string = '';


  constructor(
    private auth : AuthService
  ) { }

  ngAfterViewInit(): void {
    // Méthode du cycle de vie qui est appelée après que la vue et les éléments enfants ont été initialisés
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    // Méthode du cycle de vie qui est appelée après l'initialisation du composant
    this.inputs = document.querySelectorAll(".input-field");
    this.toggle_btn = document.querySelectorAll(".toggle");
    this.main = document.querySelector("main")!;
    this.bullets = document.querySelectorAll(".bullets span");
    this.images = document.querySelectorAll(".image");

    this.inputs.forEach((inp: Element) => {
      // Gestionnaires d'événements pour les champs de saisie
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });
      inp.addEventListener("blur", () => {
        if ((<HTMLInputElement>inp).value != "") return;
        inp.classList.remove("active");
      });
    });

    this.toggle_btn.forEach((btn: Element) => {
      // Gestionnaires d'événements pour les boutons de basculement
      btn.addEventListener("click", () => {
        this.main.classList.toggle("sign-up-mode");
      });
    });

    this.bullets.forEach((bullet: Element) => {
      // Gestionnaires d'événements pour les balles du slider
      bullet.addEventListener("click", this.moveSlider.bind(this));
    });
  }

  moveSlider(event: Event) {
    // Fonction pour déplacer le slider
    let index = (<HTMLElement>event.target).dataset['value'];

    let currentImage = document.querySelector(`.img-${index}`);
    this.images.forEach((img: Element) => img.classList.remove("show"));
    currentImage?.classList.add("show");

    const textSlider = document.querySelector(".text-group");

    if (textSlider instanceof HTMLElement) {
      textSlider.style.transform = `translateY(${-(Number(index) - 1) * 2.2}rem)`;
    }

    this.bullets.forEach((bull: Element) => bull.classList.remove("active"));
    (<HTMLElement>event.target).classList.add("active");
  }

  isSignInMode: boolean = true;
  isSignUpMode: boolean = false;

  // Méthode pour basculer en mode de connexion
  toggleSignInMode() {
    this.isSignInMode = true;
    this.isSignUpMode = false;
    this.resetSignInForm();

  }

  // Méthode pour basculer en mode d'inscription
  toggleSignUpMode() {
    this.isSignInMode = false;
    this.isSignUpMode = true;
    this.resetSignUpForm();

  }

  resetSignInForm() {

  }

  resetSignUpForm() {

  }



  onLogin() {
    if(this.email == ''){
      alert('Please enter email');
      return;
    }
    if(this.password == ''){
      alert('Please enter password');
      return;
    }


    this.auth.login(this.email,this.password);

    this.email = '';
    this.password = '';

  }

  onRegister() {

    if(this.email == ''){
      alert('Please enter email');
      return;
    }
    if(this.password == ''){
      alert('Please enter password');
      return;
    }


    this.auth.register(this.email,this.password);

    this.email = '';
    this.password = '';
  }



}
