import { ProductListServiceService } from './../services/product-list.service.service';
import { Product, numberArr } from './../models/porduct.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-porduct-list',
  templateUrl: './porduct-list.component.html',
  styleUrls: ['./porduct-list.component.css']
})
export class PorductListComponent implements OnInit {
  numbers: number[] = numberArr
  productList: Product[];
  option: number;
  product: Product;
  constructor(private productService: ProductListServiceService) {
    this.productService.ProductsList$.subscribe(data => {
      if (data.length === 0) {
        this.productService.getProductList()
      }
      this.productList = data;
    })
  }

  ngOnInit(): void {
  }

  porductQuantity(option: number) {
    this.option = option
  }

  addToCart(product: Product) {
    this.productService.addToCart(product, this.option)
  }

}
