import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements AfterViewInit{
  @ViewChild('nameInput') nameInput?: ElementRef;
  @ViewChild('amountInput') amountInput?: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngAfterViewInit() {
    // console.log(this.nameInput)
  }

  onAddItem() {
    const ingName = this.nameInput?.nativeElement?.value;
    const ingValue = this.amountInput?.nativeElement.value;
    const newIngredient = new Ingredient(
      ingName, ingValue);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
