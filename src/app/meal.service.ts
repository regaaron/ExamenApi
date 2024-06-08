import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'http://localhost:3000/api/meals';

  constructor(private http: HttpClient) { }

  getMealByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?s=${name}`);
  }
}
