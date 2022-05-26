import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { IUpdateCart } from 'src/app/feature/products/product-detail/product-detail.component';
import { environment } from 'src/environments/environment';
import { ICart, IProduct } from '../interfaces';

@Injectable()
export class CartService {
  private apiUrl = environment.apiUrl;
  private _orderCount = new BehaviorSubject<number>(0);
  private orderCount$ = this._orderCount.asObservable();

  private _totalItems = new BehaviorSubject<number>(0);
  private totalItems$ = this._totalItems.asObservable();

  constructor(private http: HttpClient) { }
  
  getOrderCount(): Observable<number> {
    return this.orderCount$;
  }
  setOrderCount(latestValue: number) {
    return this._orderCount.next(latestValue);
  } 

  getTotalItems(): Observable<number> {
    return this.totalItems$;
  }
  setTotalItems(latestValue: number) {
    return this._orderCount.next(latestValue);
  }

  loadCartList(): Observable<ICart> {
    return this.http.get<ICart>(`${this.apiUrl}/carts`, {withCredentials: true});
  }
  addToCart(payload: IUpdateCart): Observable<IUpdateCart> {
    return this.http.post<IUpdateCart>(`${this.apiUrl}/carts`, payload, {withCredentials: true});
  }
  deleteProductFromCart(product: IProduct): Observable<ICart> {
    return this.http.delete<ICart>(`${this.apiUrl}/carts/${product._id}`, {withCredentials: true});
    // const url = `${this.apiUrl}/carts/:${product}`;
    // const param = new HttpParams({fromString: 'productId=product'});
    // return this.http.delete<ICart>(`${this.apiUrl}/carts`, {params: {param}, withCredentials: true});
  }
  // removeProductFromCart(product: ICart): Observable<ICart> {
  //   // return this.http.delete<ICart>(`${this.apiUrl}/carts`, product, {withCredentials: true});
  // }
}
