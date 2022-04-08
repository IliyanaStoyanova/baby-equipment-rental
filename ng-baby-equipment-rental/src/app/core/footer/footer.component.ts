import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {  
  currentYear = new Date().getFullYear();
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(){
    this.pageYoffset = window.pageYOffset;
  }
  constructor(private scroll: ViewportScroller) {}

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
}
