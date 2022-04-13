import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

const routes: Routes = [
  {
    path: 'categories/:categoryId',
    component: CategoryDetailComponent
  }
];

export const CategoriesRountingModule = RouterModule.forChild(routes);
