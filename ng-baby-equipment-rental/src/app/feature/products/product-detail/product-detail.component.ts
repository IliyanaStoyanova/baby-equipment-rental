import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IProduct } from 'src/app/core/interfaces';
import { CartService } from 'src/app/core/services/cart.service';
import { MessageService, messageType } from 'src/app/core/services/message.service';
import { ProductService } from 'src/app/core/services/product.service';

export interface IUpdateCart {
  product: {
    productId: IProduct,
    rental_period: {
      start_period: string,
      end_period: string
    }
  }
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  startDate = new Date();
  maxDate: Date;
  blockedDates: [{"start_period": string | Date, "end_period": string | Date}];

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  cartTotal: number;
  subscription: Subscription;
  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private authService: AuthService,
    private cartService: CartService,    
    private messageService: MessageService) { }
    
  ngOnInit(): void {
    const currentYear = this.startDate.getFullYear();
    this.maxDate = new Date(currentYear + 2, 11, 31);

    const productId = this.activatedRoute.snapshot.params['productId'];

    this.productService.loadProductById(productId).subscribe(product => {
      this.product = product;   
      this.blockedDates = product.rental_period;
      this.blockedDates.map(item => {
        let startYear = (typeof item.start_period==="string") ? Number(item.start_period.substring(0,4)) : 0;
        let startMonth = (typeof item.start_period==="string") ? Number(item.start_period.substring(5,7)) : 0;
        let startDay = (typeof item.start_period==="string") ? Number(item.start_period.substring(8,11)) : 0;
        let endYear = (typeof item.end_period==="string") ? Number(item.end_period.substring(0,4)) : 0;
        let endMonth = (typeof item.end_period==="string") ? Number(item.end_period.substring(5,7)) : 0;
        let endDay = (typeof item.end_period==="string") ? Number(item.end_period.substring(8,11)) : 0;
        item.start_period = new Date(startYear, startMonth, startDay);
        item.end_period = new Date(endYear, endMonth, endDay);
      });
    });

    this.subscription = this.cartService.getOrderCount().subscribe((orderCount) => {
      this.cartTotal = orderCount;
    });
  }
  rangeFilter: (date: Date | null) => boolean =
    (date: Date | null) => {
      if(!date) return false;
      date = new Date(date);
      return !this.blockedDates.find(x=>
        date! >= x.start_period && date! <= x.end_period
      );
    };
  createDate (selectDate: Date): string {
    const newDate = `${selectDate.getFullYear()}/${selectDate.getMonth()+1<10 ? '0' : ''}${selectDate.getMonth()+1}/${selectDate.getDate()<10 ? '0' : ''}${selectDate.getDate()}`;
    return newDate;
  }
  addItemToCart(product: IProduct) {
    if(this.range.value.start === null) {      
      this.messageService.notifyForMessage({text: "You must write date period!", type: messageType.error});
    } else {
      let payload: IUpdateCart = {
        product: {
          productId: product,
          rental_period: {
            start_period: this.createDate(this.range.value.start),
            end_period: this.createDate(this.range.value.end)
          }
        }
      };
      this.cartService.addToCart(payload).subscribe({
        next: () => {
          this.messageService.notifyForMessage({text: "Success added to card!", type: messageType.success});
          this.cartService.setOrderCount(this.cartTotal + 1);
        },
        error: (err) => {
          this.messageService.notifyForMessage({text: err.error.message, type: messageType.error});
        } 
      });
    }
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
} 
