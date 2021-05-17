import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './models/product.model';

import { catchError, map } from 'rxjs/operators';

// import { MatSnackBarModule } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = environment.apiURL;

  constructor(
    // private snackBar: MatSnackBarModule
    private http: HttpClient
  ) { }

  // Obtendo produtos do backend
  getProduct():Observable<any> {
    return this.http.get<any>(`${this.baseURL}/products`);
  }

  // Obtendo produto pelo id 
  getById(id: string): Observable<Product> {
    const url = `${this.baseURL}/products/${id}`;
    return this.http.get<Product>(url);
  }

  // Atualização de produto
  updateProduct(product: Product): Observable<Product> {
    const url = `${this.baseURL}/products/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  // Deletar produto
  deleteProduct(id: number): Observable<Product> {
    const url = `${this.baseURL}/products/${id}`;
    return this.http.delete<Product>(url);
  }

  // Inserindo produto no backend
  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseURL}/products`, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    //this.showMessage("ERRO", true);
    return EMPTY;
  }

  // showMessage(msg: string, isError: boolean = false): void {
  //   this.snackBar.open(msg, '', {
  //     duration: 4000,
  //     horizontalPosition: "center",
  //     verticalPosition: "top",
  //     panelClass: isError ? ['msg-error'] : ['msg-success']
  //   })
  // }
}
