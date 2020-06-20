import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  ngOnInit(): void {
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value);
      this.ingredientAdded.emit(newIngredient);
  }

  onDeleteItem() {

  }

  onClearItem() {

  }
}
