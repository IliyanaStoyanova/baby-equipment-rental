import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICart, IProduct } from 'src/app/core/interfaces';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: ICart;
  cartTotal: number;
  totalItems: number;
  subscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.loadCartList().subscribe(cartList => {
      this.sumTotalItems(cartList);
      this.cart = cartList;
    });
    
    this.subscription = this.cartService.getOrderCount().subscribe((orderCount) => {
      this.cartTotal = orderCount;
    });
  }

  sumTotalItems(cartList: ICart) {
    this.totalItems = 0;
    for(let datePeriod of cartList.products) {
      let firstDate: any = new Date(datePeriod.rental_period.start_period);
      let secondDate: any = new Date(datePeriod.rental_period.end_period);

      let diff = Math.abs(firstDate - secondDate);
      let diffDays = Math.ceil(diff / (1000 * 3600 * 24));

      this.totalItems += diffDays * datePeriod.productId.price;
    }
  }
  
  removeFromCart(product: IProduct) {
    this.cartService.setOrderCount(this.cartTotal - 1);
    this.cartService.deleteProductFromCart(product).subscribe(item => {
      this.sumTotalItems(item);
      this.cart = item;
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
