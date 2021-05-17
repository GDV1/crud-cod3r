import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    // this.productService.showMessage('Teste SnackBar');
    this.productService.postProduct(this.product).subscribe(() => {
      console.log("Produto Criado com sucesso");
      this.cancel();
    })
  }


  cancel(): void {
    this.route.navigate(['/products']);
  }
}
