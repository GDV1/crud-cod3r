import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.productService.getById(id).subscribe(product => {
      this.product = product;
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id).subscribe(() => {
      console.log('Produto excluido');
      this.cancel();
    });
  }

  cancel() {
    this.route.navigate(['/products']);
  }
}
