import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory, IProduct } from '../interfaces';

@Injectable()
export class CategoryService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loadCategoryList(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.apiUrl}/categories`);
  }
  loadCategoryById(id: string): Observable<ICategory<IProduct>> {
    return this.http.get<ICategory<IProduct>>(`${this.apiUrl}/categories/${id}`);
  }
  loadCategoryByIdSorter(id: string, sorter: string): Observable<ICategory<IProduct>> {
    return this.http.get<ICategory<IProduct>>(`${this.apiUrl}/categories/${id}/sort/${sorter}`);
  }
}
