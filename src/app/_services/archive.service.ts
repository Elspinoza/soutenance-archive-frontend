import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Archive } from '../_models/archive.model';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {


  constructor(private http: HttpClient) { }

  showAllArchive():Observable<any> {
    return this.http.get<any>(`${environment.backendHost}/archives`)
  }

  addArchive(archiveFormData: FormData): Observable<Archive> {
    return this.http.post<Archive>(`${environment.backendHost}/upload`,archiveFormData)
  }

  deleteArchive(id: number): Observable<unknown> {
    return this.http.delete(`${environment.backendHost}/archive/delete/${id}`)
  }

  updateArchive(id: number, archive: Archive): Observable<Archive> {
    return this.http.put<Archive>(`${environment.backendHost}/archive/update/${id}`, archive)
  }

  searchOnArchive(keyword: string): Observable<any> {
    return this.http.get<any>(`${environment.backendHost}/archives?keyword=${keyword}`);
  }


}
