import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

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
  }
  rangeFilter: (date: Date | null) => boolean =
    (date: Date | null) => {
      if(!date) return false;
      date = new Date(date);
      return !this.blockedDates.find(x=>
        date! >= x.start_period && date! <= x.end_period
      );
    };
} 
