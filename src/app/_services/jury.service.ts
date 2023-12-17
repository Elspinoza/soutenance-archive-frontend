import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Jury } from '../_models/jury.model';

@Injectable({
  providedIn: 'root'
})
export class JuryService {

  constructor( private http : HttpClient){}

   showAllJury():Observable<any> {
    return this.http.get<any>(`${environment.backendHost}/jurys`)
   }

   addJury(jury: Jury): Observable<Jury> {
    return this.http.post<Jury>(`${environment.backendHost}/jury/add`, jury)
   }

   deleteJury(id: number): Observable<unknown> {
    return this.http.delete(`${environment.backendHost}/jury/delete/${id}`)
  }

  updateJury(id: number, jury: Jury): Observable<Jury> {
    return this.http.put<Jury>(`${environment.backendHost}/jury/update/${id}`, jury)
  }


}
