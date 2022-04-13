import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/interfaces';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.loadProductList().subscribe(productList => {
      this.products = productList;
    });
  }

}
