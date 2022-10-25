import { Injectable } from '@angular/core';
import { Product } from './../models/porduct.model';
import { BehaviorSubject, filter, map, Observable, subscribeOn } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListServiceService {
  private productsList: Product[] = [];
  cart: Product[] = [];
  ProductsList$ = new BehaviorSubject<Product[]>(this.productsList)
  constructor(private http: HttpClient,) { }

  getProductList(): void {
    const subscription = this.http.get<Product[]>('../../assets/data.json').subscribe(data => {
      this.productsList = data
      this.ProductsList$.next(this.productsList)
      subscription.unsubscribe()
    })
  }

  addToCart(product: Product, quantity: number ) {
    const data = this.cart.find(data => data.id === product.id)
    if (data) {
      product.quantity = quantity
      alert(product.quantity as number +' of '+product.name + ' Added to cart')
      return
    } else {
      this.cart.push(product)
      product.quantity = quantity
      alert(product.quantity as number +' of '+ product.name + ' Added to cart')
      return this.cart;
    }
  }
  addInCart(product: Product, quantity: number ) {
    const data = this.cart.find(data => data.id === product.id)
    if (data) {
      product.quantity = quantity
      return
    } else {
      this.cart.push(product)
      product.quantity = quantity
      return this.cart;
    }
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = []
    return this.cart
  }
  getProductTotal() {
    let total: number = 1
    this.cart.forEach(e => {
      e.total = parseFloat((e.price * e.quantity).toFixed(2))
      total = e.total
    })
    return total
  }
  getOrderTotal(): number {
  return  parseFloat(this.cart.reduce((a, b) => a + b.total, 0).toFixed(2))
  }
}
