import { Component, OnInit } from '@angular/core';
import { ProcuctService } from './service/procuct.service';
import { tap } from 'rxjs';
import { Product } from './interface/product.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productSvc: ProcuctService, private shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.productSvc.getProduct().pipe(
      tap((products: Product[]) => this.products = products)
    ).subscribe();
  }

  addToCart(product: Product): void {
    console.log('Producto added to cart', product);
    this.shoppingCartSvc.updateCart(product);
  }

}
