import { CartService } from './../../cart/cart.service';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  standalone: true,
  imports: [NgFor, MatCardModule, NgIf, MatButtonModule, MatIconModule, AsyncPipe]
})
export class ProductsListComponent {

  private service = inject(ProductsService);
  private cartService = inject(CartService);
  products$ = this.service.load();

  addProductToCart(product: Product): void {
    this.cartService.addProduct(product);
  }
}
