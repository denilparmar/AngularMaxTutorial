import { Recipe } from './models/recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick(){
    this.recipeSelected.emit();
  }

}
