import { Component } from '@angular/core';
import { MealService } from '../../meal.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DomseguroPipe } from '../../domseguro.pipe';


@Component({
  selector: 'app-api1',
  standalone: true,
  imports: [FormsModule,HttpClientModule,DomseguroPipe],
  templateUrl: './api1.component.html',
  styleUrl: './api1.component.css'
})
export class Api1Component {
  mealName: string = '';
  mealData: any = null;
  video:string="";

  constructor(private mealService: MealService) { }

  searchMeal() {
    this.mealService.getMealByName(this.mealName).subscribe(data => {
      this.mealData = data.meals ? data.meals[0] : null;
      this.video = this.getYouTubeVideoID();
    });
  }

  getYouTubeVideoID():string {
    const urlObj = new URL(this.mealData.strYoutube);
    return urlObj.search.slice(3);
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
