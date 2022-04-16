import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICart, IProduct } from 'src/app/core/interfaces';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: ICart;
  priceTotal: number= 0;
  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartService.loadCartList().subscribe(cartList => {
      this.cart = cartList;
    });
  }
}
