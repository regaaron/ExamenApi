import { Component } from '@angular/core';
import { MealService } from '../../meal.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-api1',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './api1.component.html',
  styleUrl: './api1.component.css'
})
export class Api1Component {
  mealName: string = '';
  mealData: any = null;

  constructor(private mealService: MealService) { }

  searchMeal() {
    this.mealService.getMealByName(this.mealName).subscribe(data => {
      this.mealData = data.meals ? data.meals[0] : null;
    });
  }

  getIngredients(): string[] {
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.mealData[`strIngredient${i}`];
      const measure = this.mealData[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  }
}
