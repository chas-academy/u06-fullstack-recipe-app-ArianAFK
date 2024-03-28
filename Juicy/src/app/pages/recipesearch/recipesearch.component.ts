import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-recipesearch',
  standalone: true,
  imports: [],
  templateUrl: './recipesearch.component.html',
  styleUrl: './recipesearch.component.css'
})
export class RecipesearchComponent {

  recipes?: any[];

  constructor(private recipeService: RecipeService) { }

  searchRecipe() {
    this.recipeService.getRecipes("chicken").subscribe(res => {
      console.log(res);
      this.recipes = res;
    });



  }

}
