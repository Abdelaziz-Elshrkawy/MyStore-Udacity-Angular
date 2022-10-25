import { ProductListServiceService } from './../services/product-list.service.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { numberArr, Product } from '../models/porduct.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  @Output() porductQuantity: EventEmitter<number> = new EventEmitter();
  numbers: number[] = numberArr
  option: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  addProductToCart(product: Product) {
    this.addToCart.emit(product)
  }

  onSubmit() {
    this.porductQuantity.emit(this.option)
  }
}
