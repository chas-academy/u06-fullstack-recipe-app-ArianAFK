import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
  private app_key = "41d02b91ec67deac380d24e797a84abd";
  private app_id = "4de72d3b";

  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) { }

  getRecipes(searchterm: string): Observable<any[]> {
    let cuisineType = "American";
    let mealType = "Breakfast";
    let url = this.baseUrl + "&q=" + searchterm + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&cuisineType=" + cuisineType + "&mealType=" + mealType;
    return this.http.get<any[]>(url, this.httpOptions)
  }
}
