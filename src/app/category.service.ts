import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/api/category';
  private mealsByCategoryUrl = 'http://localhost:3000/api/meals/';


  constructor(private http: HttpClient) { }

  getCategory(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getMealsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.mealsByCategoryUrl}${category}`);
  }
}
