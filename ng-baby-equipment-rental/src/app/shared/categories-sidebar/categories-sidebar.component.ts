import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/core/interfaces';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-categories-sidebar',
  templateUrl: './categories-sidebar.component.html',
  styleUrls: ['./categories-sidebar.component.css']
})
export class CategoriesSidebarComponent implements OnInit {
  categories!: ICategory[];

  constructor(private categoriesSidebar: CategoryService) { }

  ngOnInit(): void {
    this.categoriesSidebar.loadCategoryList().subscribe(categoryList => {
      this.categories = categoryList;
    });
  }

}
