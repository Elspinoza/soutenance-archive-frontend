import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Plateforme } from '../_models/plateforme.model';

@Injectable({
  providedIn: 'root'
})
export class PlateformeService {

  constructor(private http: HttpClient) { }

  showAllPlateforme(): Observable<any> {
    return this.http.get<any>(`${environment.backendHost}/plateformes`)
  }

  addPlateforme(plateforme: Plateforme): Observable<Plateforme> {
    return this.http.post<Plateforme>(`${environment.backendHost}/plateforme/add`,plateforme)
  }

  deletePlateforme(id: number): Observable<unknown> {
    return this.http.delete(`${environment.backendHost}/plateforme/delete/${id}`)
  }

  updatePlateforme(id: number, plateforme: Plateforme): Observable<Plateforme> {
    return this.http.put<Plateforme>(`${environment.backendHost}/plateforme/update/${id}`, plateforme)
  }

}
