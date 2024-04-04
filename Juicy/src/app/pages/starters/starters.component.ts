import { Component, Input, input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { SearchComponent } from '../search/search.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mains',
  standalone: true,
  imports: [SearchComponent, CommonModule],
  templateUrl: './starters.component.html',
  styleUrl: './starters.component.css'
})
export class StartersComponent {
  dishType = "Starter";
  recipes?: any;
  constructor(private recipeService: RecipeService, private router: Router) { }
  recieveRecipes(recipes: any[]) {
    this.recipes = recipes
  }
  goToDetails(recipe: any) {
    let startIndex = recipe.self.indexOf("/v2/") + 4; // Add 4 to include "/v2/"
    let endIndex = recipe.self.indexOf("?");
    let extractedId = recipe.self.substring(startIndex, endIndex);
    console.log(extractedId);
    this.router.navigate(['/recipe', extractedId]);
  }
}