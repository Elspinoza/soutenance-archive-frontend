import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable, take, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1),
      map(user => {
        if (user) {
          // L'utilisateur est connecté, autoriser l'accès à la route
          return true;
        } else {
          // L'utilisateur n'est pas connecté, rediriger vers la page de connexion
          this.router.navigate(['/admin/login']);
          return false;
        }
      })
    );
  }

}
