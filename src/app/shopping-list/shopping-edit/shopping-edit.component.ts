import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements AfterViewInit{
  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  @ViewChild('nameInput') nameInput?: ElementRef;
  @ViewChild('amountInput') amountInput?: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {
    // console.log(this.nameInput)
  }

  onAddItem() {
    const ingName = this.nameInput?.nativeElement?.value;
    const ingValue = this.amountInput?.nativeElement.value;
    const newIngredient = new Ingredient(
      ingName, ingValue);
    this.ingredientAdded.emit(newIngredient);
  }
}
