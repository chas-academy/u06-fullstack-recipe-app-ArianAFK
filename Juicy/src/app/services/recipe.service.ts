import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private baseUrl = 'https://api.edamam.com/api/recipes/v2';
  private app_key = '41d02b91ec67deac380d24e797a84abd';
  private app_id = '4de72d3b';
  private httpOptions = {
    headers: new HttpHeaders({
      accept: 'application/json',
      'Accept-Language': 'en',
    }),
  };
  constructor(private http: HttpClient) { }
  getRecipes(
    searchterm: string,
    dishType: string,
    vegan: string = '',
    dairy: string = '',
    gluten: string = ''
  ): Observable<any> {
    let url =
      this.baseUrl +
      '?type=public' +
      '&q=' +
      searchterm +
      '&app_id=' +
      this.app_id +
      '&app_key=' +
      this.app_key +
      '&dishType=' +
      dishType +
      '&random=true'
    if (vegan) {
      url += '&health=vegan';
    }
    if (dairy) {
      url += '&health=dairy-free';
    }
    if (gluten) {
      url += '&health=gluten-free';
    }
    console.log(url);
    return this.http.get<any>(url, this.httpOptions);
  }
  getRecipeById(id: string) {
    let url =
      this.baseUrl +
      '/' +
      id +
      '?type=public' +
      '&app_id=' +
      this.app_id +
      '&app_key=' +
      this.app_key;
    return this.http.get<any>(url, this.httpOptions);
  }
}