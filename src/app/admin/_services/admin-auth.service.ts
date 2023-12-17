import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) { }

  //login method
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['admin/home']);
    }, err => {
      alert(err.message);
      this.router.navigate(['admin/login']);
    });
  }

  //logout

  logout() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['admin/login']);
    })
  }

}
