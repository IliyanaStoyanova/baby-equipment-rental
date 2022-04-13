import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopBannerComponent } from './header/top-banner/top-banner.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopBannerComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        CategoryService,
        ProductService
      ]
    }
  }
}
