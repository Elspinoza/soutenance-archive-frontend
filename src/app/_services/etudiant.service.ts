import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Etudiant } from '../_models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor( private httpClient : HttpClient) { }

  public showAllEtudiant():Observable<any> {
    return this.httpClient.get<any>(`${environment.backendHost}/etudiants`)
  }

}
