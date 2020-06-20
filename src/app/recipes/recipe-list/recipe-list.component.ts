import { Recipe } from './recipe-item/models/recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Lasagna', 'Lasagna is so yummy', 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg'),
    new Recipe('Pasta', 'Pasta is so yummy', 'https://lilluna.com/wp-content/uploads/2017/10/penne-pasta-resize-3-500x375.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
