import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { IUser } from '../../interfaces';
import { CartService } from '../../services/cart.service';
import { MessageService, messageType } from '../../services/message.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  currentUser$: Observable<IUser> = this.authService.currentUser$;
  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$; 
  messageEl: string;
  isError: boolean;
  cartTotal: number;

  private isLoggingOut: boolean = false;
  private subscription: Subscription;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private messageService: MessageService,
    private cartService: CartService) { }
  
  ngOnInit(): void {
    this.subscription = this.messageService.newMessage$.subscribe(newMessage => {
      this.messageEl = newMessage?.text || '';
      this.isError = newMessage?.type === messageType.error;

      if(this.messageEl) {
        setTimeout(() => {
          this.messageService.clear();
        }, 5000);
      }
    });

    this.cartService.loadCartList().subscribe((item) => {
      if(item) {
        this.cartService.setOrderCount(item.products.length);
      }
    });
    this.cartService.getOrderCount().subscribe((orderCount) => {
      this.cartTotal = orderCount;
    });
  }

  logoutHandler(): void {
    if(this.isLoggingOut) {
      return;
    }
    this.isLoggingOut = true;
    this.authService.logout$().subscribe({
      next: args => {
        console.log(args);
      },
      complete: () => {
        this.isLoggingOut = false;
        this.router.navigate(['/home']);
      },
      error: () => {
        this.isLoggingOut = false;
      }
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
