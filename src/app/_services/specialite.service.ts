import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Specialite } from '../_models/specialite.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  constructor( private http : HttpClient) { }

  showAllSpecialite():Observable<any>{
    return this.http.get<any>(`${environment.backendHost}/specialites`)
  }

  addSpecialite(specialite: Specialite): Observable<Specialite> {
    return this.http.post<Specialite>(`${environment.backendHost}/specialite/add`,specialite)
  }

  deleteSpecialite(id: number): Observable<unknown> {
    return this.http.delete(`${environment.backendHost}/specialite/delete/${id}`)
  }

  updateSpecialite(specialite: Specialite): Observable<Specialite> {
    return this.http.put<Specialite>(`${environment.backendHost}/specialite/update`, specialite)
  }
  // updateSpecialite(id: number, specialite: Specialite): Observable<Specialite> {
  //   return this.http.put<Specialite>(`${environment.backendHost}/specialite/update/${id}`, specialite)
  // }

}
