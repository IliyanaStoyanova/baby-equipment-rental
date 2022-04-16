import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUpdateCart } from 'src/app/feature/products/product-detail/product-detail.component';
import { environment } from 'src/environments/environment';
import { ICart } from '../interfaces';

@Injectable()
export class CartService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loadCartList(): Observable<ICart> {
    return this.http.get<ICart>(`${this.apiUrl}/carts`, {withCredentials: true});
  }
  addToCart(payload: IUpdateCart): Observable<IUpdateCart> {
    console.log('service',payload);
    return this.http.post<IUpdateCart>(`${this.apiUrl}/carts`, payload, {withCredentials: true});
  }
}
