import { filter, Subscription } from 'rxjs';
import { ProductListServiceService } from './../services/product-list.service.service';

import { numberArr, Product } from './../models/porduct.model';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit, OnDestroy {
  productList!: Product[]
  productId: number
  product!: Product
  numbers: number[] = numberArr
  productIdSubscription!: Subscription
  productsSubscription!: Subscription
  option: number = 1
  constructor(private activeRouter: ActivatedRoute, private productListService: ProductListServiceService) {
  this.productIdSubscription = this.activeRouter.params.subscribe(params =>{
    const id = parseInt(params['id'])
    this.productsSubscription = this.productListService.ProductsList$.subscribe(data => {
      if (data.length === 0) {
        this.productListService.getProductList();
      }
      const product = data.find(p =>  p.id === id )

      this.product = product as Product
      })

    })
  }
  ngOnDestroy(): void {
    this.productIdSubscription.unsubscribe()
    this.productsSubscription.unsubscribe()
  }
  ngOnInit(): void {

  }

  quantity(event: Event) {
    this.option = parseInt((event.target as HTMLSelectElement).value)
  }

  addToCart(product: Product) {
    this.productListService.addToCart(product, this.option as number)
  }
}


