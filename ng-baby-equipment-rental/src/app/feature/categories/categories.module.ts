import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoriesRountingModule } from './categories-routing.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    RouterModule,
    CategoriesRountingModule,
    SharedModule
  ],
  exports: [
    CategoryListComponent
  ]
})
export class CategoriesModule { }
