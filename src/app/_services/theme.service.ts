import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../_models/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor( private http : HttpClient) { }

  showAllTheme():Observable<any>{
    return this.http.get<any>(`${environment.backendHost}/themes`)
  }

  addTheme(theme: Theme): Observable<Theme> {
    return this.http.post<Theme>(`${environment.backendHost}/theme/add`, theme)
  }

  deleteTheme(id: number): Observable<unknown> {
    return this.http.delete(`${environment.backendHost}/theme/delete/${id}`)
  }

  updateTheme(id: number, theme: Theme): Observable<Theme> {
    return this.http.put<Theme>(`${environment.backendHost}/theme/update/${id}`, theme)
  }


}
