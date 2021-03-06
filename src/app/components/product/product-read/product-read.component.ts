import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'controls'];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(products => {
      this.products = products;
    });
  }

}
