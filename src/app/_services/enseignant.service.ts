import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Enseignant } from '../_models/enseignant.model';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor( private http : HttpClient) { }

  showAllEnseignant():Observable<any> {
    return this.http.get<any>(`${environment.backendHost}/enseignants`)
  }

  addEnseignant(enseignant : Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(`${environment.backendHost}/enseignant/add`,enseignant)
  }

  deleteEnseignant(id: number): Observable<unknown> {
    return this.http.delete(`${environment.backendHost}/enseignant/delete/${id}`)
  }

  updateEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.put<Enseignant>(`${environment.backendHost}/enseignant/update`, enseignant)
  }

  // updateEnseignant(id: number, enseignant: Enseignant): Observable<Enseignant> {
  //   return this.http.put<Enseignant>(`${environment.backendHost}/enseignant/update/${id}`, enseignant)
  // }


}
