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
import { storageServiceProvider } from './services/storage.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { ShowErrorService } from './services/show-error.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { MessageService } from './services/message.service';
import { ErrorHandlerInterceptor } from './error-handler.interceptor';

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
        UserService,
        CategoryService,
        ProductService,
        storageServiceProvider,
        ShowErrorService,
        MessageService,
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: AuthInterceptor
        },
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: ErrorHandlerInterceptor
        }
      ]
    }
  }
}
