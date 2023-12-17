import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Vague } from '../_models/vague.model';

@Injectable({
  providedIn: 'root'
})
export class VagueService {

  constructor(private http: HttpClient) { }

  showAllArchive(): Observable<any> {
    return this.http.get<any>(`${environment.backendHost}/vagues`)
  }

  addVague(vague: Vague): Observable<Vague> {
    return this.http.post<Vague>(`${environment.backendHost}/vague/add`, vague)
  }

  deleteVague(id: number): Observable<unknown> {
    return this.http.delete(`${environment.backendHost}/vague/delete/${id}`)
  }

  updateVague(vague: Vague): Observable<Vague> {
    return this.http.put<Vague>(`${environment.backendHost}/vague/update`, vague)
  }
  // updateVague(id: number, vague: Vague): Observable<Vague> {
  //   return this.http.put<Vague>(`${environment.backendHost}/vague/update/${id}`, vague)
  // }
}
