import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/core/interfaces';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  category!: ICategory[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.loadCategoryList().subscribe(categoryList => {
      this.category = categoryList;
    });
  } 

}
