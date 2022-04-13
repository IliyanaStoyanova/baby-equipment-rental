import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory, IProduct } from 'src/app/core/interfaces';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category!: ICategory<IProduct>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }
  
  showProducts(): void {
    this.activatedRoute.params.subscribe(params => {
      const categoryId = params['categoryId'];
      this.categoryService.loadCategoryById(categoryId).subscribe(item => {
        this.category = item;
      });
    });
  }

  ngOnInit(): void {
    this.showProducts();
  }  
}
