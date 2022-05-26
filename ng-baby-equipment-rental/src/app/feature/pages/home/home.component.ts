import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  subscription: Subscription;
  cartTotal: number;

  constructor(private titleService: Title, private cartService: CartService) { 
    this.titleService.setTitle("Home");
  }

  ngOnInit(): void {
    console.log(this.cartService.loadCartList.length);
    this.subscription = this.cartService.getOrderCount().subscribe((orderCount) => {
      this.cartTotal = orderCount;
    });
  }
}
