import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesModule } from '../categories/categories.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoriesModule
  ]
})
export class PagesModule { }
