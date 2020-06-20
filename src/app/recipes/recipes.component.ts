import { Recipe } from './recipe-list/recipe-item/models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
