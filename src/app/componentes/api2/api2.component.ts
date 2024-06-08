import { Component } from '@angular/core';
import { CategoryService } from '../../category.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-api2',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './api2.component.html',
  styleUrl: './api2.component.css'
})
export class Api2Component {
  categories: any[] = [];
  selectedCategory: string = '';
  meals: any[] = [];
  constructor(private categoryService: CategoryService){ }

  ngOnInit(): void{
    this.categoryService.getCategory().subscribe(data =>{
      this.categories = data.categories;
    });
  }

  // onCategoryChange(category: string):void{
  //   this.selectedCategory = category;
  //   this.categoryService.getMealsByCategory(category).subscribe(data =>{
  //     this.meals = data.meals;
  //   });

  // }



  onCategoryChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCategory = selectedValue; // Assign selectedValue instead of event
    this.categoryService.getMealsByCategory(selectedValue).subscribe(data => {
      this.meals = data.meals;
    });
  }
  
 
  

}
