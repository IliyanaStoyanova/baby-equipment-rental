import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductPageComponent
  },
  {
    path: 'products/:productId',
    component: ProductDetailComponent
  }
];

export const ProductsRoutingModule = RouterModule.forChild(routes);
