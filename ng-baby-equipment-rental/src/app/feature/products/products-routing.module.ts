import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductPageComponent
  }
];

export const ProductsRoutingModule = RouterModule.forChild(routes);
