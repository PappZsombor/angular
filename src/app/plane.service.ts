import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {
  private apiUrl = 'http://localhost:3000/planes';

  constructor(private http: HttpClient) { }

  // Az összes repülő adat lekérése
  getPlanes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Új repülő hozzáadása
  addPlane(plane: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, plane);
  }

  // Repülő módosítása
  updatePlane(id: number, plane: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, plane);
  }

  // Repülő törlése
  deletePlane(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
