import { FormGroup, Validators } from '@angular/forms';
import { ProductListServiceService } from './../services/product-list.service.service';
import { Product } from './../models/porduct.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = []
  total: number
  option: number
  constructor(private productService: ProductListServiceService,) {

  }

  ngOnInit(): void {
    this.cart = this.productService.getCart()
    this.productService.getProductTotal()
    this.total = parseFloat(this.cart.reduce((a, b) => a + b.total, 0).toFixed(2))
  }
  removeProduct(product: Product) {
    const cart = this.productService.getCart()
    const index = cart.findIndex(e => e.id === product.id)
    cart.splice(index, 1)
    this.total = parseFloat(this.cart.reduce((a, b) => a + b.total, 0).toFixed(2))
  }
  clearCart() {
    this.productService.clearCart()
    this.cart = []
  }
  quantity(product: Product, event: Event) {
    this.option = parseInt((event.target as HTMLSelectElement).value)
    this.productService.addInCart(product, this.option)
    this.productService.getProductTotal()
    this.total = parseFloat(this.cart.reduce((a, b) => a + b.total, 0).toFixed(2))
  }
}
